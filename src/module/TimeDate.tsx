import { Gtk } from "ags/gtk4";
import { Poll } from "ags/state";

export function DateModule() {
    const year = new Poll("", 1000, "date +%Y", (t) => {
        return t
            .split("")
            .filter((v, i) => [2, 3].includes(i))
            .join("");
    });

    const month = new Poll("", 1000, "date +%m");
    const day = new Poll("", 1000, "date +%d");

    return (
        <box class="date" _type="center" orientation={Gtk.Orientation.VERTICAL}>
            <box hexpand halign={Gtk.Align.CENTER}>
                <label label={year()} />
            </box>
            <box hexpand halign={Gtk.Align.CENTER}>
                <label label={month()} />
            </box>
            <box hexpand halign={Gtk.Align.CENTER}>
                <label label={day()} />
            </box>
        </box>
    );
}

export function TimeModule() {
    const hour = new Poll("", 1000, "date +%H");
    const min = new Poll("", 1000, "date +%M");
    const sec = new Poll("", 1000, "date +%S");

    return (
        <centerbox
            class="time"
            _type="end"
            orientation={Gtk.Orientation.VERTICAL}
        >
            <box _type="start" hexpand halign={Gtk.Align.CENTER}>
                <label label={hour()} />
            </box>
            <box _type="center" hexpand halign={Gtk.Align.CENTER}>
                <label label={min()} />
            </box>
            <box _type="end" hexpand halign={Gtk.Align.CENTER}>
                <label label={sec()} />
            </box>
        </centerbox>
    );
}

export default function DateTimeModule() {
    return (
        <centerbox _type="end" orientation={Gtk.Orientation.VERTICAL}>
            <DateModule />
            <TimeModule />
        </centerbox>
    );
}
