import styled from 'styled-components'

export const ContainerProduct = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 8px;

  /* position: relative; */
  width: 266px;

  background: #ffffff;

  border: 1px solid #e5e4e6;
  border-radius: 7px;
`
export const ImgProduct = styled.img`
  width: 90px;
  height: 90px;
  left: 88px;
  top: 16px;

  border-radius: 7px;
`
export const TituloProduct = styled.div`
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;

  text-align: center;

  color: #6d5d7a;
`
export const SpanProduct = styled.div`
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  margin-top: 8px;

  text-align: center;

  color: #979797;
`
export const SpanPrice = styled.div`
  font-family: 'Gordita';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  margin-top: 9px;

  text-align: center;

  color: #55b84b;
`
export const QtdButton = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  /* border-radius: 14px; */

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #ecebed;
  font-weight: 400;
  font-size: 16px;

  background: #249cf2;

  cursor: pointer;
`

export const Text = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  /* border-radius: 14px; */

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-weight: 400;
  font-size: 16px;

  background: #249cf2;

  cursor: pointer;
`

export const Botao = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  margin-top: 15.5px;

  border-radius: 7px;
  background: #249cf2;
`
