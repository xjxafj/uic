import Button from "./button";

const BttonDemo=()=>{
    return (
        <>
            <Button>default Button</Button>
            <Button btnType='primary' disabled={true}>disabled Button</Button>
            <Button btnType='primary' size='lg'>Large primary</Button>
            <Button btnType='primary' size='sm'>Small primart</Button>
            <Button btnType='link' size='lg' href='http://www.baidu.com'>baidu Link</Button>
        </>
    );
};

export default BttonDemo;

