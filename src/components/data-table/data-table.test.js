import React from "react";
import DataTable from "./data-table";
import { shallow, mount } from "enzyme";

describe("Data table  comnponent", () => {

    const onCountChange = jest.fn();

    it("Should render the data table", () => {
        const tree = shallow(<DataTable 
                onCountChange={onCountChange}
                rowCount={20} 
            ></DataTable>)
        expect(tree).toMatchSnapshot();
    });
    

    it('should render all the components isnide the data table component', () => {
        const wrapper = mount(<DataTable 
            onCountChange={onCountChange}
            rowCount={20} 
        ></DataTable>);
        expect(wrapper.find('.d-inline-block').length).toBe(2);
    });

    it('should call the on on previous and on next event', () => {
        const wrapper = mount(<DataTable 
            onCountChange={onCountChange}
            rowCount={20} 
        ></DataTable>);

        wrapper.find(".select-wrapper").simulate("change");
        expect(onCountChange).toHaveBeenCalled();

    });
});