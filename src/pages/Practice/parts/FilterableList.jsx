import styles from '@/styles/FilterableList.module.css';
// console.log(styles.primary);

function FilterableList() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="todo"></label>
          <input
            type="text"
            id="todo"
            placeholder="휴일에 할 일"
            className={styles.primary}
          />
          <button type="submit">추가</button>
        </div>
      </form>
    </>
  );
}

export default FilterableList;
