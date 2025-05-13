{
  description = "Description for the project";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    ags = {
      url = "github:aylur/ags?ref=v3";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs@{ flake-parts, ags, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" ];
      perSystem = { pkgs, system, ... }:
        let
          pname = "tysh";
          entry = "./src/app.ts";
          version = "0.0.1";

          astalPackages = with ags.packages.${system}; [
            io
            astal4
            battery
            network
            hyprland
            notifd
          ];

          extraPackages = astalPackages ++ [ pkgs.libadwaita pkgs.libsoup_3 ];

        in {
          packages.default = pkgs.stdenv.mkDerivation {
            src = ./.;
            inherit pname;
            inherit version;

            # build dependencies
            nativeBuildInputs = with pkgs; [
              wrapGAppsHook
              gobject-introspection
              ags.packages.${system}.default
            ];

            # runtime dependencies
            buildInputs = extraPackages ++ [ pkgs.gjs ];

            installPhase = ''
              runHook preInstall

              mkdir -p $out/bin
              mkdir -p $out/share
              cp -r * $out/share
              ags bundle ${entry} $out/bin/${pname} -d "SRC='$out/share'"

              runHook postInstall
            '';

          };
          devShells.default = pkgs.mkShell {
            buildInputs = [
              (ags.packages.${system}.default.override {
                inherit extraPackages;
              })
            ];
          };
        };
    };
}
