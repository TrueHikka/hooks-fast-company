import React from "react";
import CollapseWrapper from "../common/collapse";
import CardWrapper from "../common/Card";
import PropTypes from "prop-types";

const Children = ({ children }) => {
	return React.Children.map(children, (child, i) => {
		let num = i
		num +=1
		return <div>Компонент списка {num}</div> 
	})
	
}
 
Children.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
	return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <CardWrapper>
				<Children>
                    <Component />
                    <Component />
                    <Component />
                </Children>
            </CardWrapper>
        </CollapseWrapper>
    )
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
