import { For } from "ags/gtk4";
import { bind, Binding } from "ags/state";
import AstalHyprland from "gi://AstalHyprland?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

export default function HyprModule() {
    const hypr = AstalHyprland.get_default();
    const vert = Gtk.Orientation.VERTICAL;

    const workspace_all = bind(hypr, "workspaces").as((wss) =>
        wss.sort((a, b) => a.id - b.id),
    );

    const workspace_foc = bind(hypr, "focused_workspace");

    return (
        <box _type="center" orientation={vert}>
            <box orientation={vert}>
                <label label={workspace_foc.as((fws) => fws.id.toString())} />
            </box>
            <For each={workspace_all}>
                {(ws) => (
                    <label
                        class={workspace_foc.as((fws) =>
                            fws.id === ws.id ? "focused" : "",
                        )}
                        label={workspace_foc.as((fws) =>
                            fws.id === ws.id ? "" : "",
                        )}
                    />
                )}
            </For>
        </box>
    );
}
