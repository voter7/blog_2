import styled from 'styled-components';

const LargeText = styled.div`
    font-size: 32px;
    font-wight: bold;
`;

const SmallText = styled.div`
    font-size: 18px;
    font-wight: bold;
`;


 const LogoContainer = ({className}) => (

    <div className={className}>
        <i class="fa fa-code" aria-hidden="true"></i>
        <div>
            <LargeText>Блог</LargeText>
            <SmallText>веб-разработчика</SmallText>
        </div>

    </div>
);

export const Logo = styled(LogoContainer)`
    display: flex;

`;


