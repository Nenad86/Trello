import boards from "../pages/boardsPage.json";
import list from "../pages/listPage.json";
import loginModal from "../pages/loginModal.json";
import navigation from "../pages/navigation.json";
import registerModal from "../pages/registerModal.json";
import taskModal from "../pages/taskModal.json";
import task from "../pages/taskPage.json";
import data from "../fixtures/data.json"

describe("createBoard", () => {
    it("registerNewUser", () => {
        cy.visit("");
        cy.get(navigation.loginButton, {timeout: 3000}).click({force : true});
        cy.get(loginModal.signUpButton).click();
        cy.get(registerModal.emailInput).type(data.user.email);
        cy.get(registerModal.passwordInput).type(data.user.password);
        cy.get(registerModal.signUpButton).eq(1).click()
    })

    it("loginUser", ()=>{
        cy.visit("");
        cy.get(navigation.loginButton).click();
        cy.get(loginModal.emailInput).type(data.user.email);
        cy.get(loginModal.passwordInput).type(data.user.password);
        cy.get(loginModal.loginButton).eq(0).click();
    })

    it("logout", () => {
        cy.visit("");
        cy.get(navigation.loginButton).click();
        cy.get(loginModal.emailInput).type(data.user.email);
        cy.get(loginModal.passwordInput).type(data.user.password);
        cy.get(loginModal.loginButton).eq(0).click();
        cy.get(navigation.loginButton).click({force:true});
        cy.get(navigation.logOutButton).click({force: true});
    })

    it("createBoard", () => {
        cy.visit("");
        cy.get(navigation.loginButton).click();
        cy.get(loginModal.emailInput).type(data.user.email);
        cy.get(loginModal.passwordInput).type(data.user.password);
        cy.get(loginModal.loginButton).eq(0).click();
        cy.get(boards.createBoardField).click({force:true});
        cy.get(boards.createBoardField).click();
        cy.get(boards.addBoardField).click().type("Nenad");
        cy.get(boards.saveBoardButton).click();
        cy.get(boards.boardDropdown).click();
        cy.get(boards.deleteBoard).click();
    })

    it('createList', ()=>{
        cy.visit("");
        cy.get(navigation.loginButton).click();
        cy.get(loginModal.emailInput).type(data.user.email);
        cy.get(loginModal.passwordInput).type(data.user.password);
        cy.get(loginModal.loginButton).eq(0).click();
        cy.get(boards.createBoardField).click({force:true});
        cy.get(boards.createBoardField).click();
        cy.get(boards.addBoardField).click().type("Nenad");
        cy.get(boards.saveBoardButton).click();
        cy.get(list.addListField).click({force:true});
        cy.get(list.typeListField).type("prvaLista");
        cy.get(list.saveListButton).click();
        cy.get(list.listDropdown).click();
        cy.get(list.deleteList).click();
        cy.get(boards.boardDropdown).click();
        cy.get(boards.deleteBoard).click();
    })

    it.only('createTask', ()=>{
        cy.visit("");
        cy.get(navigation.loginButton).click();
        cy.get(loginModal.emailInput).type(data.user.email);
        cy.get(loginModal.passwordInput).type(data.user.password);
        cy.get(loginModal.loginButton).eq(0).click();
        cy.get(boards.createBoardField).click({force:true});
        cy.get(boards.createBoardField).click();
        cy.get(boards.addBoardField).click().type("Nenad");
        cy.get(boards.saveBoardButton).click();
        cy.get(list.addListField).click({force:true});
        cy.get(list.typeListField).type("prvaLista");
        cy.get(list.saveListButton).click();
        cy.get(task.addNewTaskButton).click();
        cy.get(task.taskTitleField).type("prviTask");
        cy.get(task.addButton).click();
        cy.get(task.taskCheckbox).check();
        cy.get(task.taskField).click();
        cy.get(taskModal.taskModuleDropdown).click();
        cy.get(taskModal.deleteTaskOption).click();
        cy.get(list.listDropdown).click();
        cy.get(list.deleteList).click();
        cy.get(boards.boardDropdown).click();
        cy.get(boards.deleteBoard).click();
    })


})