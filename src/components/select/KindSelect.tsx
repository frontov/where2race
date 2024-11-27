import {Button, MenuItem} from "@blueprintjs/core";
import {ItemRenderer, Select} from "@blueprintjs/select";
import React from "react";
import getKinds, {allKinds, Kind} from "../../api/Kinds";
import {useEffect, useState} from "react";
import "./kindSelect.css"
import Icon from "../Icon";

interface Props {
    onSendData: (kind: Kind) => void;
}


const renderKind: ItemRenderer<Kind> = (kind, {handleClick, handleFocus, modifiers}) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            // key={kind.title}
            // label={kind.title}
            onClick={handleClick}
            onFocus={handleFocus}
            roleStructure="listoption"
            text={kind.title}
            icon={
                <Icon name={kind.name} description={kind.title}/>
            }
        />
    );
};

const KindSelect: React.FC<Props> = (props: Props) => {
    const [selectedKind, setSelectedKind] = React.useState<Kind | undefined>(allKinds);
    // console.log(TOP_100_KINDS);
    const [loading, setLoading] = useState<boolean>(true);
    const [kindList, setKindList] = useState<Kind[]>([]);

    const handleKind = (kind: Kind) => {
        setSelectedKind(kind);
        props.onSendData(kind);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getKinds({});
                // let map = result.map((f, index) => ({ ...f, rank: index + 1 }));

                result.push(allKinds)
                setKindList(result);

            } finally {
                setLoading(false); // Set loading to false
            }
        };

        fetchData();

    }, []); // Empty dependency array ensures this runs only once

    if (loading) return <div>Loading...</div>;

    return (
        <Select<Kind>
            items={kindList}
            filterable={false}
            itemRenderer={renderKind}
            // noResults={<MenuItem disabled={true} text="No results." roleStructure="listoption" />}
            onItemSelect={handleKind}
            className="filter-elem select"


        >
            <Button text={selectedKind?.title}
                    // icon={
                    //     <Icon name={selectedKind ? selectedKind.name : 'other'}
                    //           description={selectedKind ? selectedKind.name : 'other'}/>
                    // }
                    className="button"/>
        </Select>
    );
};

export default KindSelect;