import Component from "@/plugins/component";
import "./signup.scss";

export default class SignUp extends Component {
  render() {
    return `
            <main class="form-signup w-100 mx-auto">
              <form>
                <h1 class="h3 mb-3 fw-normal">Please sign Up</h1>
            
                <div class="form-floating">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
              </form>
            </main>
        `;
  }
}
