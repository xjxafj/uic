import Button from "./button";

const BttonDemo=()=>{
    return (
        <>
            <Button href='link' btnType='link' disabled={true}>link</Button>
            <Button btnType='primary' disabled={false}>primary</Button>
        </>
    );
};

export default BttonDemo;

