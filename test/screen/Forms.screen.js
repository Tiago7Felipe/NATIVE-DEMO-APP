class formsScreen {
    get #enterForms () {
        return $('//android.widget.Button[@content-desc="Forms"]')
        
    }
    get #imputField () {
        return $('android= new UiSelector().text("Type something")')
        
    }

    async goToForms (){
        await this.#enterForms.click()
    }

    async teste () {
        await this.#imputField.setValue()
    }
}

module.exports = new formsScreen()