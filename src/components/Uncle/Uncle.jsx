import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
                <Cousin name={'rafi'}></Cousin>
                <Cousin name={'rafia'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;