import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
                <Cousin name={'rafi'}
                asset={asset}></Cousin>
                <Cousin name={'rafia'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;