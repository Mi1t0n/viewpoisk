const ErrorMessage = ({error}: { error: string }) =>
    <p className='font-[700] text-red-600 text-[48px] text-center '>
        Произошла ошибка : {error}
    </p>
export default ErrorMessage