import React, { Component } from 'react';

import IndexModel from '../../models';
import { getCourseFields } from '../../models/index_1';

import { changeCourseField } from '../../store/actions/courseTabList';

import FieldItem from './FieldItem';

import './index.css';

const indexModel = new IndexModel();

export default class CourseField extends Component {

    state = {
        fieldData: []
    }

    async getFieldData(){
        const fieldObj = await indexModel.getCourseFields(),
              fieldData = fieldObj.result;

        // const fieldData = await getCourseFields();

        this.setState({
            fieldData
        });
    }

    componentDidMount(){
        this.getFieldData();
    }

    render(){
        const { fieldData } = this.state,
              { curField, changeCourseField } = this.props;

        return (
            <div className='field-wrapper'>
                <FieldItem 
                    key={ '-1' }
                    item={{
                        field: '-1',
                        field_name: '全部课程'
                    }}
                    curField={curField}
                    changeCourseField={() => changeCourseField('-1')}
                />
                {
                    fieldData.map((item, index) => {
                        return (
                            <FieldItem 
                                key={index}
                                item={item}
                                curField={curField}
                                changeCourseField={() => changeCourseField(item.field)}
                            />
                        );
                    })
                }
            </div>
        );
    }
}