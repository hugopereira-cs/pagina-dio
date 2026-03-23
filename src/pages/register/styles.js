import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fff;
`;

export const TitleLogin = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin: 0 0 20px;
  line-height: 44px;
`;

export const SubTitleLogin = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 32px o;
`;

export const TermsOfUseText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 32px;
  line-height: 25px;
`;

export const LoginText = styled.p`
  font-family: Open Sans;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  margin-top: 20px;
  leading-trim: none;
  line-height: 100%;
  letter-spacing: 0%;

  span {
    color: #23dd7a;
  }
`;
