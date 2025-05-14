import { bind } from "ags/state";
import AstalBattery from "gi://AstalBattery?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

export default function Battery() {
    const batt = AstalBattery.get_default();

    return (
        <box _type="start" orientation={Gtk.Orientation.VERTICAL}>
            <label
                label={bind(batt, "percentage").as((num) =>
                    (num * 100).toString(),
                )}
            />
        </box>
    );
}
