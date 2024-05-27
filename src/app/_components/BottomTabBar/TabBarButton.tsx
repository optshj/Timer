import styled from "styled-components";
import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

const Wrapper = styled.div`
    flex:1;
`
const IconWrapper = styled.div<{$active:boolean}>`
    height:60px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    font-size:24px;
    color:${(props) => props.$active ? props.theme.color.input_focus : "#bdbfc3"};
`
const Text = styled.div`
    font-size:12px;
    margin-top: 4px;
`
interface TabBarButtonProps {
    icon:IconType;
    text:string;
    url:string;
}
export default function TabarButton(props:TabBarButtonProps){
    const pathname = usePathname();
    return(
        <Wrapper>
            <Link href={`${props.url}`}>
                <IconWrapper $active={pathname === props.url}>
                    <props.icon/>
                    <Text>{props.text}</Text>
                </IconWrapper>
            </Link>
        </Wrapper>
    )
}