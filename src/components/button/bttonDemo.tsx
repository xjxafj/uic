import Button from "./button";

const BttonDemo=()=>{
    return (
        <>
            <Button href='link' btnType='link' disabled={true}></Button>
            <Button btnType='primary' disabled={false}></Button>
        </>
    );
};

export default BttonDemo;

