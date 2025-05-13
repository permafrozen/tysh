import { Astal, Gdk, Gtk } from "ags/gtk4";
import app from "ags/gtk4/app";
import TimeModule from "../module/TimeDate";

export default function Bar(gdkmonitor: Gdk.Monitor) {
    const { TOP, LEFT, RIGHT, BOTTOM } = Astal.WindowAnchor;

    return (
        <window
            visible
            name="bar"
            class="Bar"
            gdkmonitor={gdkmonitor}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            anchor={TOP | LEFT | BOTTOM}
            application={app}
        >
            <centerbox
                cssName="centerbox"
                orientation={Gtk.Orientation.VERTICAL}
            >
                <TimeModule _type="end" />
            </centerbox>
        </window>
    );
}
