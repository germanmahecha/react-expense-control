const Filters = ({filter, setFilter}) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filter by spend</label>
                    <select
                        value={filter}
                        onChange={ e => setFilter(e.target.value) }
                    >
                        <option value="">-- All categories --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="various">Various Expenses</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>

                </div>
            </form>
        </div>
    )
}

export default Filters