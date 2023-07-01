import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useRef, useEffect } from 'react';

import * as searchServices from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ResultItem from '~/components/ResultItem';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // logic khi có kết quả trả về => mới chỉ định hiện tooltip của HeadlessTippy (visible={searchResult.lenght > 0})
    const [showResult, setShowResult] = useState(false);
    const debounce = useDebounce(searchValue, 500); // khi client dừng gõ value trong 0.5s => mới thực hiện update debounce

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchServices.search(debounce);
            setSearchResult(result);
        };
        fetchApi();
    }, [debounce]);

    //handle
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
        setSearchValue('');
    };

    return (
        /*Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. */
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div
                        onClick={handleHideResult}
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-result-title')}>
                                Kết quả
                            </h4>
                            {searchResult.map((result) => (
                                <ResultItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm..."
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
