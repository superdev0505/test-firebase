import React from 'react'
import { useFirebase } from 'react-redux-firebase'

import { Input, Button, InputNumber, Select } from 'antd';

import { Container, ItemContainer } from './user.component.styled';


const { Option } = Select;

export default function User() {
  const firebase = useFirebase()
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    age: 20,
    gender: 'male'
  });

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInfo({ ...userInfo,  name: value })
  }

  const ageChange = (age: number = 20) => {
    setUserInfo({ ...userInfo,  age })
  }

  const genderChange = (gender: string) => {
    setUserInfo({ ...userInfo,  gender })
  }


  const submitUserInfo = () => {
    firebase.push('user', userInfo);
  }

  return (
    <Container>
      <h1>Input Your Info</h1>
      <ItemContainer>
        <Input
          placeholder='Name'
          size='large'
          value={userInfo.name} 
          onChange={nameChange}
        />
      </ItemContainer>
      <ItemContainer>
        <InputNumber
          min={1}
          size='large'
          value={userInfo.age}
          onChange={ageChange}
        />
      </ItemContainer>
      <ItemContainer>
        <Select 
          value={userInfo.gender}
          onChange={genderChange}
          size='large'
        >
          <Option value='male'>Male</Option>
          <Option value='female'>Female</Option>
        </Select>
      </ItemContainer>
      <ItemContainer>
        <Button 
          type='primary'
          size='large'
          onClick={submitUserInfo}
        >
          Submit
        </Button>
      </ItemContainer>
    </Container>
    )
}