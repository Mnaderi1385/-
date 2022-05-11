import React , { PureComponent } from 'react';
import Form from './Form';
import Swal from 'sweetalert2';

class PureCompo extends PureComponent {
    showGuide = () => {
        Swal.fire({
            icon: 'question',
            title: 'راهنما بازی',
            text: 'شما می توانید با دوستانتان به صورت چند نفره بازی کنید در ابتدا نفر اول یک کلمه را می نویسد و بعد نفر دوم باید آن کلمه را حدس بزند اگر حدس غلط باشد خطاها افزایش می یابد',
            confirmButtonText: 'فهمیدم !',
        });
    };

    render() {
        return (
            <>
                <button className="flex items-center animate-pulse duration-300 transition-all ease-in-out py-3 px-4 mt-4 mr-7 text-center rounded-md bg-slate-700 text-white select-none text-xs font-bold active:scale-110" onClick={this.showGuide}>راهنما</button>
                <section className="flex justify-center items-center min-h-screen">
                    <div className="max-w-2xl w-full md:w-[80%] bg-slate-900 mx-4 md:mx-auto rounded-md py-20 px-7">
                        <h1 className="text-center text-white my-5 text-lg md:text-2xl font-bold">بازی حدس کلمه</h1>
                        <Form />
                    </div>
                </section>
            </>
        );
    };
}

export default PureCompo;