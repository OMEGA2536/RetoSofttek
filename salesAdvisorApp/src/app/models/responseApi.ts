export interface ResponseDTO {
    status: number;
    description: string;
    objModel: any;
    token?: string;
    objPaginated?: any;
}
export interface dataRequest{
    cPerCodigo: any;
    idCurriculum: number;
}