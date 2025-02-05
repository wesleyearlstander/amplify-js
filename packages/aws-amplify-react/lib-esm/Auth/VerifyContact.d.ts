import { AuthPiece, IAuthPieceProps, IAuthPieceState } from './AuthPiece';
export interface IVerifyContactState extends IAuthPieceState {
    verifyAttr: any;
}
export declare class VerifyContact extends AuthPiece<IAuthPieceProps, IVerifyContactState> {
    constructor(props: IAuthPieceProps);
    verify(): void;
    submit(): void;
    verifyView(): JSX.Element;
    submitView(): JSX.Element;
    showComponent(theme: any): JSX.Element;
}
/**
 * @deprecated use named import
 */
export default VerifyContact;
