import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AutoComplete, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import {
    fetchPlacesStart,
    fetchPlaceDetailsStart,
    emptyPlacesResults
} from '../../redux/reducers/placesSlice';

import './styles.css';

const AutoCompleteInput = () => {
    const dispatch = useDispatch();
    const { places } = useSelector(state => state.places);

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (searchText) => {
        setSearchValue(searchText);
        if (searchText && searchText.trim().length > 0) {
            dispatch(fetchPlacesStart(searchText));
        }
    };

    const handleSelect = (value, option) => {
        const { id } = option;
        setSearchValue(option);
        dispatch(fetchPlaceDetailsStart(id))
    };

    const handleClear = () => {
        dispatch(emptyPlacesResults())
        setSearchValue('');
    }

    return (
        <AutoComplete
            className="autocomplete-input"
            style={{ width: '100%' }}
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            options={places.map(place => ({
                id: place.place_id,
                value: place.description,
            }))}
            onSelect={handleSelect}
            placeholder="Search places..."
        >
            <Input
                size="large"
                suffix={
                    <div className={searchValue ? "" : "hide-icon"}>
                        <CloseOutlined
                            style={{ cursor: 'pointer' }}
                            onClick={handleClear}
                            disabled
                        />
                    </div>
                } />
        </AutoComplete>
    );
};

export default AutoCompleteInput;
