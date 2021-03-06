"use strict";
/**
 * @name Events
 * @description
 * Events is a publish-subscribe style event system for sending and responding to application-level
 * events across your app.
 *
 * @usage
 * ```ts
 * import {Events} from 'ionic-angular';
 *
 * constructor(public events: Event) {}
 *
 * // first page (publish an event when a user is created)
 * function createUser(user) {
 *   console.log('User created!')
 *   events.publish('user:created', user);
 * }
 *
 * // second page (listen for the user created event)
 * events.subscribe('user:created', (user) => {
 *   console.log('Welcome', user);
 * });
 *
 * ```
 * @demo /docs/v2/demos/events/
 */
var Events = (function () {
    function Events() {
        this._channels = [];
    }
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {string} topic the topic to subscribe to
     * @param {function} handler the event handler
     */
    Events.prototype.subscribe = function (topic) {
        var _this = this;
        var handlers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handlers[_i - 1] = arguments[_i];
        }
        if (!this._channels[topic]) {
            this._channels[topic] = [];
        }
        handlers.forEach(function (handler) {
            _this._channels[topic].push(handler);
        });
    };
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {string} topic the topic to unsubscribe from
     * @param {function} handler the event handler
     *
     * @return true if a handler was removed
     */
    Events.prototype.unsubscribe = function (topic, handler) {
        var t = this._channels[topic];
        if (!t) {
            // Wasn't found, wasn't removed
            return false;
        }
        if (!handler) {
            // Remove all handlers for this topic
            delete this._channels[topic];
            return true;
        }
        // We need to find and remove a specific handler
        var i = t.indexOf(handler);
        if (i < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        t.splice(i, 1);
        // If the channel is empty now, remove it from the channel map
        if (!t.length) {
            delete this._channels[topic];
        }
        return true;
    };
    /**
     * Publish an event to the given topic.
     *
     * @param {string} topic the topic to publish to
     * @param {any} eventData the data to send as the event
     */
    Events.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var t = this._channels[topic];
        if (!t) {
            return null;
        }
        var responses = [];
        t.forEach(function (handler) {
            responses.push(handler(args));
        });
        return responses;
    };
    return Events;
}());
exports.Events = Events;
