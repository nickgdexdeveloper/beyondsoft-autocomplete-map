import React from 'react';
import moment from 'moment';
import { List, Button } from 'antd';





const ItemComponent = ({ item, onClick }) => {

    
    return (
        <List.Item onClick={() => onClick(item)}>
            <List.Item.Meta
              title={moment(item.created_at).format('DD MMM YY hh:mm:ss a')}
              description={item.description}
            />
        </List.Item>
    );


}


export const EnchanceItemComponent = React.memo(ItemComponent);





const CustomList = ({ 
    list,
    headerTitle,


    onResetClick,
    onItemClick,
}) => {

    
    return (
        <List
            header={<div>{headerTitle}</div>}
            footer={<Button type="primary" onClick={onResetClick}>Reset</Button>}
            bordered
            dataSource={list}
            renderItem={(item) => <EnchanceItemComponent 
                item={item}
                onClick={onItemClick}
            />}
        />
    );


};





export default CustomList;














