import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'safia'}></Cousin>
                <Cousin name={'safi'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;