import { NumberInput, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { getCatalogItems } from '../../services/catalogues-storage';
import './filter.css';

interface SelectItem {
  value: string;
  label: string;
}

const FilterComponent: React.FC = () => {
  const catalogues = getCatalogItems();
  const selectList: SelectItem[] = catalogues.map((i) => ({
    value: i.key.toString(),
    label: i.title,
  }));

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h2>Фильтры</h2>
        <button type="button" className="filter-reset-btn">
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
            rightSection={<IconChevronDown size="1.4rem" />}
            rightSectionWidth={30}
          />
        </div>
        <fieldset>
          <div className="input-item-container">
            <legend>Оклад</legend>
            <NumberInput placeholder="От" radius="0.8rem" size="xl" />
            <NumberInput placeholder="До" radius="0.8rem" size="xl" />
          </div>
        </fieldset>
        <button className="btn-prime btn-size-m btn-filter-apply">Применить</button>
      </div>
    </div>
  );
};

export default FilterComponent;
