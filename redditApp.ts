import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
    selector: 'reddit',
    template:  `
        <form class="ui large form segment">
            <h3 class="ui header">Add a link</h3>

            <div class="field">
                <label for="title">Title:</label>
                <input name="title">
            </div>
            <div class="field">
                <label for="link">Link: </label>
                <input name="link">
            </div>
        </form>
    `
})
class RedditApp{
    constructor(){

    }
}
bootstrap(RedditApp);