import React, { createRef, PureComponent } from 'react';
import Swal from 'sweetalert2';

class Form extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: '',
        };
        this.counter = 0;
        this.input = createRef();
    };

    handleChangeName = () => {
        this.setState({
            name: this.input.current.value,
        });
    };

    componentDidMount() { this.input.current.focus(); };

    submitForm = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'حالا حدس بزن',
        });
        if(this.input.current.value === '') {
            Swal.fire({
                icon: 'error',
                title: 'یه حدسی بزن',
                confirmButtonText: 'باشه !',
            });
        };
    };

    render() {
        return (
            <form action="#" className="mx-auto text-center" onSubmit={this.submitForm}>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-6 fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <input type="text" ref={this.input} placeholder="کلمه خود را وارد کنید ..." id="nameInput" className="w-full rounded-md text-xs outline-none bg-slate-900 text-white py-3 pl-3 pr-7 bg-transparent border border-slate-800 focus:ring-2 ring-purple-600" autoComplete="off" />
                </div>
                <div className="flex justify-evenly items-center flex-wrap">
                    <button type="submit" onClick={this.handleChangeName} className="flex items-center duration-300 transition-all ease-in-out py-3 px-5 mt-4 text-center rounded-md bg-purple-600 text-white select-none border border-transparent hover:bg-transparent text-xs font-bold hover:border-purple-700 hover:text-purple-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        <span>اضافه</span>
                    </button>
                    
                    <button type="reset" className="flex items-center duration-300 transition-all ease-in-out py-3 px-5 mt-4 text-center rounded-md bg-transparent text-purple-700 select-none border border-purple-700 hover:bg-purple-700 hover:text-white text-xs font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                        <span>مخفی</span>
                    </button>
                </div>
                <span className="text-red-600 font-bold block text-center text-lg md:text-2xl mt-10 animate-bounce">
                    {this.counter++}
                </span>
            </form>
        );
    };
}

export default Form;