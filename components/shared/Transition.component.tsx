import { CSSTransition as ReactCSSTransition } from 'react-transition-group';
import React, { useRef, useEffect, useContext } from 'react';

class ParentProps {
    appear?: boolean | unknown;
    isInitialRender?: boolean | unknown;
    show?: boolean | unknown;
}

class TransitionContextProps {
    parent: ParentProps;
}

const TransitionContext = React.createContext<TransitionContextProps>({
    parent: {},
});

function useIsInitialRender() {
    const isInitialRender = useRef(true);
    useEffect(() => {
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
}

function CSSTransition({
    show,
    enter,
    enterFrom,
    enterTo,
    leave,
    leaveFrom,
    leaveTo,
    appear,
    children,
}: TransitionComponentProps) {
    const enterClasses = enter.split(' ').filter((s) => s.length);
    const enterFromClasses = enterFrom.split(' ').filter((s) => s.length);
    const enterToClasses = enterTo.split(' ').filter((s) => s.length);
    const leaveClasses = leave.split(' ').filter((s) => s.length);
    const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length);
    const leaveToClasses = leaveTo.split(' ').filter((s) => s.length);

    function addClasses(node, classes) {
        classes.length && node.classList.add(...classes);
    }

    function removeClasses(node, classes) {
        classes.length && node.classList.remove(...classes);
    }

    return (
        <ReactCSSTransition
            appear={appear}
            unmountOnExit
            in={show}
            addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false);
            }}
            onEnter={(node) => {
                addClasses(node, [...enterClasses, ...enterFromClasses]);
            }}
            onEntering={(node) => {
                removeClasses(node, enterFromClasses);
                addClasses(node, enterToClasses);
            }}
            onEntered={(node) => {
                removeClasses(node, [...enterToClasses, ...enterClasses]);
            }}
            onExit={(node) => {
                addClasses(node, [...leaveClasses, ...leaveFromClasses]);
            }}
            onExiting={(node) => {
                removeClasses(node, leaveFromClasses);
                addClasses(node, leaveToClasses);
            }}
            onExited={(node) => {
                removeClasses(node, [...leaveToClasses, ...leaveClasses]);
            }}
        >
            {children}
        </ReactCSSTransition>
    );
}

export class TransitionComponentProps {
    show?: unknown;
    enter = '';
    enterFrom = '';
    enterTo = '';
    leave = '';
    leaveFrom = '';
    leaveTo = '';
    appear?: unknown;
    children: JSX.Element;
}

function TransitionComponent({ show, appear, ...rest }: TransitionComponentProps) {
    const { parent }: TransitionContextProps = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;

    if (isChild) {
        return <CSSTransition appear={parent.appear || !parent.isInitialRender} show={parent.show} {...rest} />;
    }

    return (
        <TransitionContext.Provider
            value={{
                parent: {
                    show,
                    isInitialRender,
                    appear,
                },
            }}
        >
            <CSSTransition appear={appear} show={show} {...rest} />
        </TransitionContext.Provider>
    );
}

export default TransitionComponent;
