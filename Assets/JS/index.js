const modal = document.getElementById('modal');

function openRegisteredForm(){
    modal.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__body">
        <div class="auth-form">
            <div class="auth-form__container">
                <div class="auth-form__header">
                    <h3 class="auth-form__heading">Đăng Ký</h3>
                    <span class="auth-form__swicth-btn">Đăng Nhập</span>
                </div>
                <div class="auth-form__form">
                    <div class="auth-form__form-group">
                        <input type="email" class="auth-form__form-input" required placeholder="Email của bạn."></input>
                    </div>
                    <div class="auth-form__form-group">
                        <input type="password" class="auth-form__form-input" required placeholder="Mật khẩu của bạn."></input>
                    </div>
                    <div class="auth-form__form-group">
                        <input type="password" class="auth-form__form-input" required placeholder="Nhập lại mật khẩu."></input>
                    </div>
                </div>
                <div class="auth-form__aside">
                    <span class="auth-form__policy">
                        Bằng việc đăng ký bạn đồng ý với shopee về
                        <a href="">điều khoản dịch vụ</a> và
                        <a href="">chính sách bảo mật</a> của chúng tôi.
                    </span>
                </div>
                <div class="auth-form-controls">
                    <button class="btn">Trở Lại</button>
                    <button class="btn btn--primary">Đăng Ký</button>
                </div>
            </div>
            <div class="auth-form__socials">
                <a href="" class="btn btn-social btn--facebook">
                    <i class="fab fa-facebook-square"></i>
                    <span>Kết Nối Với Facebook</span> 
                </a>
                <a href="" class="btn btn-social btn--google">
                    <i class="fab fa-google"></i>
                    <span>Kết Nối Với Google</span> 
                </a>
            </div>
        </div>
    </div>
    `;
    modal.classList.add('modal-open');
    const modalOverlay = document.querySelector('.modal__overlay');
    const btnLogin = document.querySelector('.auth-form__swicth-btn');
    modalOverlay.onclick = () => {
        modal.classList.remove('modal-open')
    }
    btnLogin.onclick = (even)=> {
        modal.classList.remove('modal-open')
        openLoginForm();
    }
}


function openLoginForm(){
    modal.innerHTML =  `
    <div class="modal__overlay"></div>
    <div class="modal__body">
            <div class="auth-form">
            <div class="auth-form__container">
                    <div class="auth-form__header">
                        <h3 class="auth-form__heading">Đăng Nhập</h3>
                        <span class="auth-form__swicth-btn">Đăng Ký</span>
                    </div>
                    <div class="auth-form__form">
                        <div class="auth-form__form-group">
                            <input type="email" class="auth-form__form-input" required placeholder="Email của bạn."></input>
                        </div>
                        <div class="auth-form__form-group">
                            <input type="password" class="auth-form__form-input" required placeholder="Mật khẩu của bạn."></input>
                        </div>
                    </div>
                    <div class="auth-form__aside auth-form__aside-login">
                    <a href="" class="auth-form__aside-help">Quên mật khẩu?</a>
                    <span class="saparate-help"></span>
                    <a href="" class="auth-form__aside-help">Cần trợ giúp?</a>
                    </div>
                    <div class="auth-form-controls">
                        <button class="btn">Trở Lại</button>
                        <button class="btn btn--primary">Đăng Nhập</button>
                    </div>
            </div>
                <div class="auth-form__socials">
                <a href="" class="btn btn-social btn--sms">
                    <i class="fas fa-sms"></i>
                    <span>SMS</span> 
                </a>
                    <a href="" class="btn btn-social btn--facebook">
                        <i class="fab fa-facebook-square"></i>
                        <span>Facebook</span> 
                    </a>
                    <a href="" class="btn btn-social btn--google btn--google-login">
                        <i class="fab fa-google"></i>
                        <span>Google</span> 
                    </a>
                </div>
            </div>
    </div>
    `;
    modal.classList.add('modal-open');
    const modalOverlay = document.querySelector('.modal__overlay');
    const btnRegistered = document.querySelector('.auth-form__swicth-btn');
    modalOverlay.onclick = ()=>{
        modal.classList.remove('modal-open')
    }
    btnRegistered.onclick = (even)=> {
        modal.classList.remove('modal-open')
        openRegisteredForm();
    }
}
