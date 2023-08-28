import { hideLoading, showLoading } from "../LoadingSpinner";

export function loginUser(e: React.SyntheticEvent) {

    e.preventDefault();
    const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    localStorage.setItem('user', email);
    showLoading();
    setTimeout(function () {
        hideLoading();
        document.location.href = '/';
    }
        , 3000
    )



}