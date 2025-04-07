/**
 * 회원가입 요청을 위한 DTO
 */
export interface ReqSignUpDto {
    /**
     * 유저 아이디(이메일)
     * @example "user@example.com"
     */
    email: string;

    /**
     * 유저 아이디(이메일) 인증
     * @example 1
     */
    verifiedEmail: number;

    /**
     * 유저 비밀번호
     * @example "password123"
     */
    password: string;

    /**
     * 유저 이름
     * @example "홍길동"
     */
    name: string;

    /**
     * 유저 전화번호
     * @example "010-1234-5678"
     */
    phoneNum: string;

    /**
     * 유저 전화번호 인증
     * @example 1
     */
    verifiedPhoneNum: number;

    /**
     * 유저 권한 ID
     * @example 1
     */
    roleId: number;
}
