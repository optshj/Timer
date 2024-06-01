import styled,{ keyframes } from 'styled-components';

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`
const Outer = styled.div`
    position: fixed;
    top:0;
    z-index:100;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 0.3s ease-in-out;  
`
const Inner = styled.div`
    position:fixed;
    z-index:101;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`
export default function Modal({children}:{children:React.ReactNode}){
    return(
        <Outer>
            <Inner>
                {children}
            </Inner>
        </Outer>
    )
}