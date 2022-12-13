import { writable } from "svelte/store";

export enum NotificationType {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export class NotificationMessage {
    public type: NotificationType;
    public message: string;
    public title: string;
    public timeout: number;
    public addtime: Date;
    public alreadyRead: boolean = false;

    constructor(type: NotificationType, message: string, title: string, timeout: number) {
        this.type = type;
        this.message = message;
        this.title = title;
        this.timeout = timeout;
        this.addtime = new Date();
        this.alreadyRead = false;

        if (title === null) {
            this.title = type;
        }
    }
}

export const notifications = writable<NotificationMessage[]>([]);


export function addNotification(type: NotificationType, message: string, title: string = type, timeout: number = 5000) {
    const notification = new NotificationMessage(type, message, title, timeout);
    notifications.update(n => [notification, ...n]);
}

export function removeNotificationAtPosition(index: number) {
    notifications.update(n => {
        n.splice(index, 1);
        return n;
    });
}

export function setAllRead() {
    notifications.update(n => n.map(x => {
        x.alreadyRead = true;
        return x;
    }));
}