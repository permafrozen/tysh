# tysh
A **ty***pescript* written **sh***ell* using the [`astal`](https://github.com/Aylur/astal) library && [`ags`](https://github.com/Aylur/ags) for bundeling.

## About

<div align="center">
    <pre>
    __                .__
    _/  |_ ___.__. _____|  |__
    \   __<   |  |/  ___/  |  \
    |  |  \___  |\___ \|   Y  \
    |__|  / ____/____  >___|  /
            \/         \/     \/
    </pre>
</div>

> [!TIP]
> `tysh` is a wordplay on the german word **"Tisch"** *(=Table)* combining `typescript` and `shell`

`tysh` is a desktop shell, meaning it contains a statusbar, notification-daemon and a runner. It is heavily `WIP` and I plan to add a bunch of extra features to it.

## Showcase

*nothing to show \*yet\**

## Todo
- [ ] Setup file structure
- [ ] Setup nix flake with a DevShell and Package
- [ ] Setup Astal root and `sass`
- [ ] Begin working on statusbar
    - [ ] Render base window
    - [ ] Add time module
    - [ ] Add batt module
    - [ ] Add hypr module
    - [ ] Add nice Animations
- [ ] Begin working on notification
    - [ ] Render base window on notification
    - [ ] ...
- [ ] Begin working on runner
    - [ ] Render base window on keybind/event ?
    - [ ] ...
- [ ] Say thanks to Aylur
- [ ] Learn TypeScript

## Dependencies

## Dev
> [!IMPORTANT]
> You also need `inotify-tools` if you want to use the `dev.sh` script.

1. Clone Repository
```console
git clone https://github.com/Permafrozen/tysh.git
```

2. Enter Development-Shell *(if `direnv` is not used)*
```console
cd aglet/
nix delevop
```

3. Generate Types
```console
cd src/
ags types -d . -p
```

## Legacy

This is the successore of my previous shell wich was using `agsv2`: [aglet](https://github.com/permafrozen/aglet)

## License
[GNU GENERAL PUBLIC LICENSE V3](LICENSE)
