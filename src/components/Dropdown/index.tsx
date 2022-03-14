import {
    DropdownContainer,
    DropdownContent,
    SearchContainer,
    IconWrapper,
    Search,
    Option,
} from './styles';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';
import { X } from '@styled-icons/bootstrap/X';

interface Props {
    data: Array<string>,
    setValue: Dispatch<SetStateAction<string>>,
    value: string;
}

const Dropdown = ({ data, setValue, value }: Props) => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ isVisible, setIsVisible ] = useState(false);
    const [ options, setOptions ] = useState(data);

    useEffect(() => {
        setOptions(data.filter(option => option.includes(searchValue.toUpperCase())))
    }, [searchValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setIsVisible(true);
    };

    const handleClick = (option: string) => {
        setValue(option);
        setSearchValue(option);
        setIsVisible(false);
    }

    return(
        <DropdownContainer>
            <SearchContainer>
                <Search
                        type="text"
                        value={searchValue}
                        placeholder="Enter airport..."
                        onChange={handleChange}
                        onClick={() => setIsVisible(true)}
                        disabled={!!value}
                    />
                {value ? 
                <IconWrapper onClick={() => { setValue(''); setSearchValue('')}} isVisible={isVisible}>
                    <X />
                </IconWrapper>
                : <IconWrapper onClick={() => setIsVisible(!isVisible)} isVisible={isVisible}>
                    <ArrowDownShort />
                </IconWrapper>}
            </SearchContainer>
            <DropdownContent isVisible={isVisible}>
                {
                options.length <= 0 ?
                <p>nothing found</p>
                : options.map((option, index) => (
                    <Option key={index} onClick={() => handleClick(option)}>{option}</Option>
                ))}
            </DropdownContent>
        </DropdownContainer>
    )
};

export default Dropdown;