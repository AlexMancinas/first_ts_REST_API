export interface ICalculatorRequestBody {
    operator: '+' | '-' | '*' | '/';
    operand1: number;
    operand2: number;
}