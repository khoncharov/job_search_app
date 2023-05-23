import { useState } from 'react';
import { NumberInput, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { getCatalogItems } from '../../services/catalogues-storage';
import { FilterState, SearchAction, SearchBy } from '../jobs-list/jobs-list-reducer';
import { DEFAULT_CATALOG } from '../../const';
import { inputStyling, selectStyling } from './filter-styles';
import './filter.css';

interface SelectItem {
  value: string;
  label: string;
}

interface FilterProps {
  filterInitState: FilterState;
  onApplyFilter: React.Dispatch<SearchAction>;
}

const filterDefaultState: FilterState = {
  catalog: DEFAULT_CATALOG.toString(),
  paymentFrom: '',
  paymentTo: '',
};

const FilterComponent: React.FC<FilterProps> = ({ filterInitState, onApplyFilter }) => {
  const [filterState, setFilterState] = useState<FilterState>(filterInitState);

  const selectList: SelectItem[] = getCatalogItems().map((i) => ({
    value: i.key.toString(),
    label: i.title,
  }));

  const catalogChangeHandler = (value: string) => {
    setFilterState(() => ({
      ...filterState,
      catalog: value,
    }));
  };

  const inputFromChangeHandler = (value: number | '') => {
    setFilterState(() => ({
      ...filterState,
      paymentFrom: value,
    }));
  };

  const inputToChangeHandler = (value: number | '') => {
    setFilterState(() => ({
      ...filterState,
      paymentTo: value,
    }));
  };

  const resetBtnHandler = () => {
    setFilterState(() => ({
      ...filterDefaultState,
    }));
  };

  const applyBtnHandler = () => {
    onApplyFilter({ type: SearchBy.FILTER, payload: filterState });
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h2>Фильтры</h2>
        <button type="button" className="filter-reset-btn" onClick={resetBtnHandler}>
          Сбросить все
        </button>
      </div>
      <div className="filter-inputs-wrapper">
        <div className="input-item-container">
          <label htmlFor="job-filter-select">Отрасль</label>
          <Select
            id="job-filter-select"
            placeholder="Выберете отрасль"
            data={selectList}
            radius="0.8rem"
            size="xl"
            rightSection={<IconChevronDown />}
            rightSectionWidth={30}
            defaultValue={filterInitState.catalog}
            onChange={catalogChangeHandler}
            value={filterState.catalog}
            styles={selectStyling}
            data-elem="industry-select"
          />
        </div>
        <fieldset>
          <div className="input-item-container">
            <legend>Оклад</legend>
            <NumberInput
              placeholder="От"
              radius="0.8rem"
              size="xl"
              defaultValue={filterInitState.paymentFrom}
              onChange={inputFromChangeHandler}
              value={filterState.paymentFrom}
              styles={inputStyling}
              data-elem="salary-from-input"
            />
            <NumberInput
              placeholder="До"
              radius="0.8rem"
              size="xl"
              defaultValue={filterInitState.paymentTo}
              onChange={inputToChangeHandler}
              value={filterState.paymentTo}
              styles={inputStyling}
              data-elem="salary-to-input"
            />
          </div>
        </fieldset>
        <button
          className="btn-prime btn-size-m btn-filter-apply"
          onClick={applyBtnHandler}
          data-elem="search-button"
        >
          Применить
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
