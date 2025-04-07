'use client';

import Input from '@/component/common/Input/Input';
import style from './page.module.scss';
import { ReqSignUpDto } from '@/types/auth/signup';
import { useState } from 'react';
import { Btn } from '@/component/common/Btn/Btn';

export default function Signup() {
    // roleData

    // 비밀번호 확인
    const [checkPw, setCheckPw] = useState('');

    // signup state
    const [signupData, signupDate] = useState<ReqSignUpDto>({
        email: '',
        verifiedEmail: 0,
        password: '',
        name: '',
        phoneNum: '',
        verifiedPhoneNum: 0,
        roleId: 0,
    });

    return (
        <form>
            <div className={style.row}>
                <label htmlFor="roleId">분류</label>
                <Input
                    id={'roleId'}
                    labelNm={'roleId'}
                    type={'text'}
                    name={'roleId'}
                    ref={null}
                />
            </div>
            <div className={style.row}>
                <label htmlFor="email">아이디</label>
                <Input
                    id={'email'}
                    labelNm={'email'}
                    type={'text'}
                    name={'email'}
                    ref={null}
                />
            </div>
            <div className={style.row}>
                <label htmlFor="password">비밀번호</label>
                <Input
                    id={'password'}
                    labelNm={'password'}
                    type={'password'}
                    name={'password'}
                    ref={null}
                />
            </div>
            <div className={style.row}>
                <label htmlFor="checkPw">비밀번호 확인</label>
                <Input
                    id={'checkPw'}
                    labelNm={'checkPw'}
                    type={'password'}
                    name={'checkPw'}
                    ref={null}
                />
            </div>
            <div className={style.row}>
                <label htmlFor="name">이름</label>
                <Input
                    id={'name'}
                    labelNm={'name'}
                    type={'text'}
                    name={'name'}
                    ref={null}
                />
            </div>
            <div className={style.row}>
                <label htmlFor="phoneNum">전화번호</label>
                <Input
                    id={'phoneNum'}
                    labelNm={'phoneNum'}
                    type={'text'}
                    name={'phoneNum'}
                    ref={null}
                />
            </div>
            <Btn
                type={'button'}
                title={''}
                id={''}
                btnType={'all'}
                hover={false}
            >
                회원가입
            </Btn>
        </form>
    );
}
