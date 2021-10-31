import Scene from "./webgl/Scene.js";
import Geometry from "./webgl/Geometry.js";
import Vector3 from "./webgl/Vector3.js";
import Face from "./webgl/Face.js";
import Color from "./webgl/Color.js";

let canvas, scene;
let geometryKiri, geometryKanan;

function main() {
    canvas = document.getElementById("myCanvas");
    scene = new Scene(canvas);

    geometryKiri = new Geometry();
    geometryKanan = new Geometry();
    
    addGeometryKiri();
    addColorKiri();
    geometryKiri.setMovement(0.0, 0.0, 0.0);
    addFaceKiri();
    scene.add(geometryKiri);

    addGeometryKanan();
    addColorKanan();
    geometryKanan.setMovement(0.0, 0.0024, 0.0);
    addFaceKanan();
    scene.add(geometryKanan);
}

function update() {
    scene.render();
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

window.onload = () => {
    main();
    animate();
};

function addGeometryKiri() {
    function verticesAtasKiri(){
        // ATAS BANGET

        // 1 DEF
        geometryKiri.addVertice(new Vector3(-0.76, 0.48, 0));
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0)); 
        geometryKiri.addVertice(new Vector3(-0.723, 0.435, 0));
        // 2 CDE
        geometryKiri.addVertice(new Vector3(-0.758, 0.534, 0));
        geometryKiri.addVertice(new Vector3(-0.76, 0.48, 0));
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0));
        // 3 CEO
        geometryKiri.addVertice(new Vector3(-0.758, 0.534, 0));
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0));
        geometryKiri.addVertice(new Vector3(-0.743, 0.577, 0));
        // 4 EIO
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0));
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.743, 0.577, 0));
        // 5 INO
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.645, 0.61, 0));
        geometryKiri.addVertice(new Vector3(-0.743, 0.577, 0));
        // 6 INM
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.645, 0.61, 0));
        geometryKiri.addVertice(new Vector3(-0.542, 0.613, 0));
        // 7 ILM
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.484, 0.58, 0));
        geometryKiri.addVertice(new Vector3(-0.542, 0.613, 0));
        // 8 IKL
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.455, 0.525, 0));
        geometryKiri.addVertice(new Vector3(-0.484, 0.58, 0));
        // 9 IJK
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.455, 0.474, 0));
        geometryKiri.addVertice(new Vector3(-0.455, 0.525, 0));
        
        // 10 EFG
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0)); 
        geometryKiri.addVertice(new Vector3(-0.723, 0.435, 0));
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        // 11 EGH
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0));
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        geometryKiri.addVertice(new Vector3(-0.52, 0.42, 0));
        // 12 EHI
        geometryKiri.addVertice(new Vector3(-0.67, 0.464, 0));
        geometryKiri.addVertice(new Vector3(-0.52, 0.42, 0));
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        // 13 HIR
        geometryKiri.addVertice(new Vector3(-0.52, 0.42, 0));
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.47, 0.445, 0));
        // 14 IJR
        geometryKiri.addVertice(new Vector3(-0.521, 0.471, 0));
        geometryKiri.addVertice(new Vector3(-0.455, 0.474, 0));
        geometryKiri.addVertice(new Vector3(-0.47, 0.445,  0));
        
        //BAGIAN ATAS BAWAHNYA

        // 1 FGP
        geometryKiri.addVertice(new Vector3(-0.723, 0.435, 0));
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        geometryKiri.addVertice(new Vector3(-0.731, 0.336, 0));
        // 2 GPS
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        geometryKiri.addVertice(new Vector3(-0.731, 0.336, 0));
        geometryKiri.addVertice(new Vector3(-0.65, 0.288, 0));
        // 3 GST
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        geometryKiri.addVertice(new Vector3(-0.65, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        // 4 GTU
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.475, 0.408, 0));
        // 5 GHU
        geometryKiri.addVertice(new Vector3(-0.613, 0.406, 0));
        geometryKiri.addVertice(new Vector3(-0.52, 0.42, 0));
        geometryKiri.addVertice(new Vector3(-0.475, 0.408, 0));
        //6 HRU
        geometryKiri.addVertice(new Vector3(-0.52, 0.42, 0));
        geometryKiri.addVertice(new Vector3(-0.47, 0.445,  0));
        geometryKiri.addVertice(new Vector3(-0.475, 0.408, 0));
        // 7 B1D1U
        geometryKiri.addVertice(new Vector3(-0.44, 0.371, 0));
        geometryKiri.addVertice(new Vector3(-0.471, 0.326, 0));
        geometryKiri.addVertice(new Vector3(-0.475, 0.408, 0));
        //8 TUD1
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.475, 0.408, 0));
        geometryKiri.addVertice(new Vector3(-0.471, 0.326, 0));

        //9 QVW 
        geometryKiri.addVertice(new Vector3(-0.724, 0.409, 0));
        geometryKiri.addVertice(new Vector3(-0.77, 0.372, 0));
        geometryKiri.addVertice(new Vector3(-0.757, 0.291, 0));
        //10 QPW
        geometryKiri.addVertice(new Vector3(-0.724, 0.409, 0));
        geometryKiri.addVertice(new Vector3(-0.731, 0.336, 0));
        geometryKiri.addVertice(new Vector3(-0.757, 0.291, 0));
        //11 PWZ
        geometryKiri.addVertice(new Vector3(-0.731, 0.336, 0));
        geometryKiri.addVertice(new Vector3(-0.757, 0.291, 0));
        geometryKiri.addVertice(new Vector3(-0.655, 0.232, 0));
        //12 PSZ
        geometryKiri.addVertice(new Vector3(-0.731, 0.336, 0));
        geometryKiri.addVertice(new Vector3(-0.65, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.655, 0.232, 0));
        //13 STZ
        geometryKiri.addVertice(new Vector3(-0.65, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.655, 0.232, 0));
        //14 TZA1
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.655, 0.232, 0));
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        //15 TA1E1
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        geometryKiri.addVertice(new Vector3(-0.483, 0.256, 0));
        //16 TC1E1
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.453, 0.285, 0));
        geometryKiri.addVertice(new Vector3(-0.483, 0.256, 0));
        //17 TC1D1
        geometryKiri.addVertice(new Vector3(-0.554, 0.288, 0));
        geometryKiri.addVertice(new Vector3(-0.453, 0.285, 0));
        geometryKiri.addVertice(new Vector3(-0.471, 0.326, 0));
        //18 B1C1D1
        geometryKiri.addVertice(new Vector3(-0.44, 0.371, 0));
        geometryKiri.addVertice(new Vector3(-0.453, 0.285, 0));
        geometryKiri.addVertice(new Vector3(-0.471, 0.326, 0));
        //19 B1C1F1
        geometryKiri.addVertice(new Vector3(-0.44, 0.371, 0));
        geometryKiri.addVertice(new Vector3(-0.453, 0.285, 0));
        geometryKiri.addVertice(new Vector3(-0.433, 0.315, 0));

    }
    
    function verticesTengahKiri(){
        //KUNING ATAS

        // 1 VWG1
        geometryKiri.addVertice(new Vector3(-0.77, 0.372, 0));
        geometryKiri.addVertice(new Vector3(-0.757, 0.291, 0));
        geometryKiri.addVertice(new Vector3(-0.752, 0.105, 0));
        // 2 WZG1
        geometryKiri.addVertice(new Vector3(-0.757, 0.291, 0));
        geometryKiri.addVertice(new Vector3(-0.655, 0.232, 0));
        geometryKiri.addVertice(new Vector3(-0.752, 0.105, 0));
        // 3 ZG1A1
        geometryKiri.addVertice(new Vector3(-0.655, 0.232, 0));
        geometryKiri.addVertice(new Vector3(-0.752, 0.105, 0));
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        // 4 A1G1H1
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        geometryKiri.addVertice(new Vector3(-0.752, 0.105, 0));
        geometryKiri.addVertice(new Vector3(-0.697, 0.054, 0));
        // 5 A1H1I1
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        geometryKiri.addVertice(new Vector3(-0.697, 0.054, 0));
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        // 6 A1I1J1
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        geometryKiri.addVertice(new Vector3(-0.499, 0.062, 0));
        // 7 A1J1K1
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        geometryKiri.addVertice(new Vector3(-0.499, 0.062, 0));
        geometryKiri.addVertice(new Vector3(-0.437, 0.1, 0));
        // 8 A1E1K1
        geometryKiri.addVertice(new Vector3(-0.547, 0.231, 0));
        geometryKiri.addVertice(new Vector3(-0.483, 0.256, 0));
        geometryKiri.addVertice(new Vector3(-0.437, 0.1, 0));
        // 9 C1E1K1
        geometryKiri.addVertice(new Vector3(-0.453, 0.285, 0));
        geometryKiri.addVertice(new Vector3(-0.483, 0.256, 0));
        geometryKiri.addVertice(new Vector3(-0.437, 0.1, 0));
        // 10 C1F1K1
        geometryKiri.addVertice(new Vector3(-0.453, 0.285, 0));
        geometryKiri.addVertice(new Vector3(-0.433, 0.315, 0));
        geometryKiri.addVertice(new Vector3(-0.437, 0.1, 0));

        //HITAM TENGAH
        // 1 G1H1L1
        geometryKiri.addVertice(new Vector3(-0.752, 0.105, 0));
        geometryKiri.addVertice(new Vector3(-0.697, 0.054, 0));
        geometryKiri.addVertice(new Vector3(-0.75, -0.016, 0));
        // 2 H1L1M1
        geometryKiri.addVertice(new Vector3(-0.697, 0.054, 0));
        geometryKiri.addVertice(new Vector3(-0.75, -0.016, 0));
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        // 3 H1I1M1
        geometryKiri.addVertice(new Vector3(-0.697, 0.054, 0));
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        // 4 I1M1N1
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        geometryKiri.addVertice(new Vector3(-0.594, -0.063, 0));
        // 5 I1N1O1
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        geometryKiri.addVertice(new Vector3(-0.594, -0.063, 0));
        geometryKiri.addVertice(new Vector3(-0.52, -0.055, 0));
        // 6 I1O1P1
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        geometryKiri.addVertice(new Vector3(-0.52, -0.055, 0));
        geometryKiri.addVertice(new Vector3(-0.465, -0.023, 0));
        // 7 I1J1P1
        geometryKiri.addVertice(new Vector3(-0.597, 0.035, 0));
        geometryKiri.addVertice(new Vector3(-0.499, 0.062, 0));
        geometryKiri.addVertice(new Vector3(-0.465, -0.023, 0));
        // 8 J1P1Q1
        geometryKiri.addVertice(new Vector3(-0.499, 0.062, 0));
        geometryKiri.addVertice(new Vector3(-0.465, -0.023, 0));
        geometryKiri.addVertice(new Vector3(-0.427, 0.005, 0));
        // 9 J1K1Q1
        geometryKiri.addVertice(new Vector3(-0.499, 0.062, 0));
        geometryKiri.addVertice(new Vector3(-0.437, 0.1, 0));
        geometryKiri.addVertice(new Vector3(-0.427, 0.005, 0));

        //KUNING BAWAH

        // 1 L1M1R1 
        geometryKiri.addVertice(new Vector3(-0.75, -0.016, 0));
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        geometryKiri.addVertice(new Vector3(-0.744, -0.101, 0));
        // 2 M1S1R1 
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        geometryKiri.addVertice(new Vector3(-0.713, -0.148, 0));
        geometryKiri.addVertice(new Vector3(-0.744, -0.101, 0));
        // 3 M1S1T1
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        geometryKiri.addVertice(new Vector3(-0.713, -0.148, 0));
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        // 4 M1N1T1
        geometryKiri.addVertice(new Vector3(-0.688, -0.047, 0));
        geometryKiri.addVertice(new Vector3(-0.594, -0.063, 0));
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        // 5 N1T1U1
        geometryKiri.addVertice(new Vector3(-0.594, -0.063, 0));
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        geometryKiri.addVertice(new Vector3(-0.57, -0.186, 0));
        // 6 N1U1V1
        geometryKiri.addVertice(new Vector3(-0.594, -0.063, 0));
        geometryKiri.addVertice(new Vector3(-0.57, -0.186, 0));
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        // 7 N1O1V1
        geometryKiri.addVertice(new Vector3(-0.594, -0.063, 0));
        geometryKiri.addVertice(new Vector3(-0.52, -0.055, 0));
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        // 8 O1V1W1
        geometryKiri.addVertice(new Vector3(-0.52, -0.055, 0));
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        geometryKiri.addVertice(new Vector3(-0.448, -0.127, 0));
        // 9 O1W1Z1
        geometryKiri.addVertice(new Vector3(-0.52, -0.055, 0));
        geometryKiri.addVertice(new Vector3(-0.448, -0.127, 0));
        geometryKiri.addVertice(new Vector3(-0.429, -0.075, 0));
        // 10 O1P1Z1
        geometryKiri.addVertice(new Vector3(-0.52, -0.055, 0));
        geometryKiri.addVertice(new Vector3(-0.465, -0.023, 0));
        geometryKiri.addVertice(new Vector3(-0.429, -0.075, 0));
        // 11 P1Q1Z1
        geometryKiri.addVertice(new Vector3(-0.465, -0.023, 0));
        geometryKiri.addVertice(new Vector3(-0.427, 0.005, 0));
        geometryKiri.addVertice(new Vector3(-0.429, -0.075, 0));

    }

    function verticesBawahKiri(){
        //BULAT BAWAH

        // 1 L1R1A2
        geometryKiri.addVertice(new Vector3(-0.75, -0.016, 0));
        geometryKiri.addVertice(new Vector3(-0.744, -0.101, 0));
        geometryKiri.addVertice(new Vector3(-0.8, -0.1, 0));
        // 2 R1A2B2
        geometryKiri.addVertice(new Vector3(-0.744, -0.101, 0));
        geometryKiri.addVertice(new Vector3(-0.8, -0.1, 0));
        geometryKiri.addVertice(new Vector3(-0.831, -0.159, 0));
        // 3 R1S1B2
        geometryKiri.addVertice(new Vector3(-0.744, -0.101, 0));
        geometryKiri.addVertice(new Vector3(-0.713, -0.148, 0));
        geometryKiri.addVertice(new Vector3(-0.831, -0.159, 0));
        // 4 S1B2C2
        geometryKiri.addVertice(new Vector3(-0.713, -0.148, 0));
        geometryKiri.addVertice(new Vector3(-0.831, -0.159, 0));
        geometryKiri.addVertice(new Vector3(-0.827, -0.242, 0));
        // 5 S1C2D2
        geometryKiri.addVertice(new Vector3(-0.713, -0.148, 0));
        geometryKiri.addVertice(new Vector3(-0.827, -0.242, 0));
        geometryKiri.addVertice(new Vector3(-0.8, -0.352, 0));

        //6 S1T1D2
        geometryKiri.addVertice(new Vector3(-0.713, -0.148, 0));
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        geometryKiri.addVertice(new Vector3(-0.8, -0.352, 0));
        //7 T1D2F2
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        geometryKiri.addVertice(new Vector3(-0.8, -0.352, 0));
        geometryKiri.addVertice(new Vector3(-0.74, -0.411, 0));
        //8 T1E2F2
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        geometryKiri.addVertice(new Vector3(-0.638, -0.327, 0));
        geometryKiri.addVertice(new Vector3(-0.74, -0.411, 0));
        //9 T1U1E2
        geometryKiri.addVertice(new Vector3(-0.657, -0.178, 0));
        geometryKiri.addVertice(new Vector3(-0.57, -0.186, 0));
        geometryKiri.addVertice(new Vector3(-0.638, -0.327, 0));
        //10 E2F2G2
        geometryKiri.addVertice(new Vector3(-0.638, -0.327, 0));
        geometryKiri.addVertice(new Vector3(-0.74, -0.411, 0));
        geometryKiri.addVertice(new Vector3(-0.666, -0.439, 0));


        // 11 U1E2H2
        geometryKiri.addVertice(new Vector3(-0.57, -0.186, 0));
        geometryKiri.addVertice(new Vector3(-0.638, -0.327, 0));
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        // 12 E2G2H2
        geometryKiri.addVertice(new Vector3(-0.638, -0.327, 0));
        geometryKiri.addVertice(new Vector3(-0.666, -0.439, 0));
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        // 13 U1V1H2
        geometryKiri.addVertice(new Vector3(-0.57, -0.186, 0));
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        // 14 V1H2I2
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        geometryKiri.addVertice(new Vector3(-0.416, -0.399, 0));
        // 15 V1I2J2
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        geometryKiri.addVertice(new Vector3(-0.416, -0.399, 0));
        geometryKiri.addVertice(new Vector3(-0.349, -0.315, 0)); 

        //16 V1W1J2 UDH
        geometryKiri.addVertice(new Vector3(-0.495, -0.167, 0));
        geometryKiri.addVertice(new Vector3(-0.448, -0.127, 0));
        geometryKiri.addVertice(new Vector3(-0.349, -0.315, 0));
        //17 W1Z1L2
        geometryKiri.addVertice(new Vector3(-0.448, -0.127, 0));
        geometryKiri.addVertice(new Vector3(-0.429, -0.075, 0));
        geometryKiri.addVertice(new Vector3(-0.356, -0.101, 0));
        //18 Q1Z1L2
        geometryKiri.addVertice(new Vector3(-0.427, 0.005, 0));
        geometryKiri.addVertice(new Vector3(-0.429, -0.075, 0));
        geometryKiri.addVertice(new Vector3(-0.356, -0.101, 0));
        //19 W1L2M2
        geometryKiri.addVertice(new Vector3(-0.448, -0.127, 0));
        geometryKiri.addVertice(new Vector3(-0.356, -0.101, 0));
        geometryKiri.addVertice(new Vector3(-0.418, -0.198, 0));
        //CORONG
        //1 L2M2N2
        geometryKiri.addVertice(new Vector3(-0.356, -0.101, 0));
        geometryKiri.addVertice(new Vector3(-0.418, -0.198, 0));
        geometryKiri.addVertice(new Vector3(-0.249, -0.114, 0));
        //2 M2N2K2
        geometryKiri.addVertice(new Vector3(-0.418, -0.198, 0));
        geometryKiri.addVertice(new Vector3(-0.249, -0.114, 0));
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        //3 M2K2S2
        geometryKiri.addVertice(new Vector3(-0.418, -0.198, 0));
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        geometryKiri.addVertice(new Vector3(-0.273, -0.300, 0));
        //4 M2J2S2
        geometryKiri.addVertice(new Vector3(-0.418, -0.198, 0));
        geometryKiri.addVertice(new Vector3(-0.349, -0.315, 0));
        geometryKiri.addVertice(new Vector3(-0.273, -0.300, 0));
        //5 K2S2P2
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        geometryKiri.addVertice(new Vector3(-0.273, -0.300, 0));
        geometryKiri.addVertice(new Vector3(-0.227, -0.294, 0));


        //6 K2P2B3
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        geometryKiri.addVertice(new Vector3(-0.227, -0.294, 0));
        geometryKiri.addVertice(new Vector3(-0.185, -0.26, 0));
        //7 K2N2O2
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        geometryKiri.addVertice(new Vector3(-0.249, -0.114, 0));
        geometryKiri.addVertice(new Vector3(-0.132, -0.146, 0));
        //8 K2O2A3
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        geometryKiri.addVertice(new Vector3(-0.132, -0.146, 0));
        geometryKiri.addVertice(new Vector3(-0.131, -0.211, 0));
        //9 A3B3C3
        geometryKiri.addVertice(new Vector3(-0.131, -0.211, 0));
        geometryKiri.addVertice(new Vector3(-0.185, -0.26, 0));
        geometryKiri.addVertice(new Vector3(-0.086, -0.240, 0));
        //10 O2Z2A3
        geometryKiri.addVertice(new Vector3(-0.132, -0.146, 0));
        geometryKiri.addVertice(new Vector3(-0.081, -0.149, 0));
        geometryKiri.addVertice(new Vector3(-0.131, -0.211, 0));
        //11 Z2A3D3
        geometryKiri.addVertice(new Vector3(-0.081, -0.149, 0));
        geometryKiri.addVertice(new Vector3(-0.131, -0.211, 0));
        geometryKiri.addVertice(new Vector3(-0.05, -0.2, 0));
        //12 A3C3D3
        geometryKiri.addVertice(new Vector3(-0.131, -0.211, 0));
        geometryKiri.addVertice(new Vector3(-0.086, -0.240, 0));
        geometryKiri.addVertice(new Vector3(-0.05, -0.2, 0));
        //13 K2A3B3
        geometryKiri.addVertice(new Vector3(-0.269, -0.209, 0));
        geometryKiri.addVertice(new Vector3(-0.131, -0.211, 0));
        geometryKiri.addVertice(new Vector3(-0.185, -0.26, 0));


        //DASAR
        //1 B2C2Q2
        geometryKiri.addVertice(new Vector3(-0.831, -0.159, 0));
        geometryKiri.addVertice(new Vector3(-0.827, -0.242, 0));
        geometryKiri.addVertice(new Vector3(-0.936, -0.377, 0));

        //2 C2Q2R2
        geometryKiri.addVertice(new Vector3(-0.827, -0.242, 0));
        geometryKiri.addVertice(new Vector3(-0.936, -0.377, 0));
        geometryKiri.addVertice(new Vector3(-0.911, -0.462, 0));
        //3 C2D2R2
        geometryKiri.addVertice(new Vector3(-0.827, -0.242, 0));
        geometryKiri.addVertice(new Vector3(-0.8, -0.352, 0));
        geometryKiri.addVertice(new Vector3(-0.911, -0.462, 0));
        //4 D2R2W2
        geometryKiri.addVertice(new Vector3(-0.8, -0.352, 0));
        geometryKiri.addVertice(new Vector3(-0.911, -0.462, 0));
        geometryKiri.addVertice(new Vector3(-0.837, -0.505, 0));
        //5 D2F2W2
        geometryKiri.addVertice(new Vector3(-0.8, -0.352, 0));
        geometryKiri.addVertice(new Vector3(-0.74, -0.411, 0));
        geometryKiri.addVertice(new Vector3(-0.837, -0.505, 0));

        //6 F2G2W2
        geometryKiri.addVertice(new Vector3(-0.74, -0.411, 0));
        geometryKiri.addVertice(new Vector3(-0.666, -0.439, 0));
        geometryKiri.addVertice(new Vector3(-0.837, -0.505, 0));
        //7 G2W2V2
        geometryKiri.addVertice(new Vector3(-0.666, -0.439, 0));
        geometryKiri.addVertice(new Vector3(-0.837, -0.505, 0));
        geometryKiri.addVertice(new Vector3(-0.483, -0.588, 0));
        //8 G2H2V2
        geometryKiri.addVertice(new Vector3(-0.666, -0.439, 0));
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        geometryKiri.addVertice(new Vector3(-0.483, -0.588, 0));
        //9 H2V2U2
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        geometryKiri.addVertice(new Vector3(-0.483, -0.588, 0));
        geometryKiri.addVertice(new Vector3(-0.373, -0.567, 0));
        //10 H2I2U2
        geometryKiri.addVertice(new Vector3(-0.532, -0.445, 0));
        geometryKiri.addVertice(new Vector3(-0.416, -0.399, 0));
        geometryKiri.addVertice(new Vector3(-0.373, -0.567, 0));
        //11 I2U2T2
        geometryKiri.addVertice(new Vector3(-0.416, -0.399, 0));
        geometryKiri.addVertice(new Vector3(-0.373, -0.567, 0));
        geometryKiri.addVertice(new Vector3(-0.322, -0.499, 0));
        //12 I2J2T2
        geometryKiri.addVertice(new Vector3(-0.416, -0.399, 0));
        geometryKiri.addVertice(new Vector3(-0.349, -0.315, 0));
        geometryKiri.addVertice(new Vector3(-0.322, -0.499, 0));
        //13 J2T2S2
        geometryKiri.addVertice(new Vector3(-0.349, -0.315, 0));
        geometryKiri.addVertice(new Vector3(-0.322, -0.499, 0));
        geometryKiri.addVertice(new Vector3(-0.273, -0.3, 0));
    }

    verticesAtasKiri();
    verticesTengahKiri();
    verticesBawahKiri();
    
}

function addColorKiri() {
    function colorAtasKiri(){
        //ATAS BANGET
        // 1 DEF
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 2 CDE
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 3 CEO
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 4 EIO
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.6));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 5 INO
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.6));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 6 INM
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.595));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        // 7 ILM
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.6));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 8 IKL
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.62));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 9 IJK
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));

        // 10 EFG
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 11 EGH
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 12 EHI
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.63));
        // 13 HIR
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 14 IJR
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.68));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        
        //BAGIAN ATAS BAWAHNYA

        // 1 FGP
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.63));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 2 GPS
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.625));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        // 3 GST
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.6));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        // 4 GTU
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.6));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        // 5 GHU
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        // 6 HRU
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //7 B1D1U --> dibagian leher atasnya kuning 
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //8 TUD1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //9 QVW 
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //10 QPW
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //11 PWZ
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //12 PSZ 
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //13 STZ
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //14 TZA1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //15 TA1E1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.91));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //16 TC1E1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //17 TC1D1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        //18 B1C1D1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        //19 B1C1F1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));

    }

    function colorTengahKiri(){
        // KUNING ATAS

        // 1 VWG1
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 2 WZG1
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.651, 0.2, 0.9));
        // 3 ZG1A1
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.651, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        // 4 A1G1H1
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.651, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.651, 0.2, 0.9));
        // 5 A1H1I1
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 6 A1I1J1
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.67, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.67, 0.2, 0.9));
        // 7 A1J1K1
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        // 8 A1E1K1
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.7, 0.2, 0.9));
        // 9 C1E1K1
        geometryKiri.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        // 10 C1F1K1
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));

        //HITAM BAWAH

        // 1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        // 2
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        // 3
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        // 4
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.72));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 5
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 6
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.68));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 7
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.666));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.63));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.91));
        // 8
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        // 14
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.666));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));

        //KUNING BAWAH
        //1 
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 2 
        geometryKiri.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 3 
        geometryKiri.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 4
        geometryKiri.addColor(new Color(1.0, 0.7, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 5
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 6
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 7
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 8
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 9
        geometryKiri.addColor(new Color(1.0, 0.8, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 10
        geometryKiri.addColor(new Color(1.0, 0.76, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.7, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        // 11
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKiri.addColor(new Color(1.0, 0.65, 0.2, 0.9));
    }

    function colorBawahKiri(){
        //BULAT BAWAH
        //1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //2
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        //3
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.69));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //4
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.66));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //5
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //6
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //7
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //8
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //9
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        //10
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));

        //11
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //12
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //13
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.645));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.63));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //14
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.635));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.91));
        //15
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.63));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //16
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.63));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.65));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.91));
        //17
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.68));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        //18
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.93));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));

        //CORONG
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.85));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.85));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.83));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.85));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.71));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.71));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.72));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.87));


        //DASAR
        //1
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.82));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.82));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //2
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.82));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //3
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.82));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.82));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //4
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //5
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //6
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //7
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        //8
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));

        //9
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));

        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKiri.addColor(new Color(0.0, 0.0, 0.0, 0.9));

    }

    colorAtasKiri();
    colorTengahKiri();
    colorBawahKiri();

}

function addFaceKiri() {
    for (let i = 0; i < (14 + 19 + 10 + 9 + 11 + 19 + 13 + 13) * 3; i += 3) {
        geometryKiri.addFace(new Face(i, i + 1, i + 2));
    }
}

function addGeometryKanan() {
    function verticesAtasKanan() {
        // SISI ATAS BULAT

        // 1 CEI
        geometryKanan.addVertice(new Vector3(0.368, 0.42, 0));
        geometryKanan.addVertice(new Vector3(0.366, 0.385, 0));
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        // 2 EIF
        geometryKanan.addVertice(new Vector3(0.366, 0.385, 0));
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        geometryKanan.addVertice(new Vector3(0.383, 0.358, 0));
        // 3 IFG
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        geometryKanan.addVertice(new Vector3(0.383, 0.358, 0));
        geometryKanan.addVertice(new Vector3(0.413, 0.34, 0));
        // 4 IGJ
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        geometryKanan.addVertice(new Vector3(0.413, 0.34, 0));
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        // 5 IJK
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        geometryKanan.addVertice(new Vector3(0.467, 0.375, 0));
        // 6 JKD
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        geometryKanan.addVertice(new Vector3(0.467, 0.375, 0));
        geometryKanan.addVertice(new Vector3(0.523, 0.339, 0));
        // 7 KDL
        geometryKanan.addVertice(new Vector3(0.467, 0.375, 0));
        geometryKanan.addVertice(new Vector3(0.523, 0.339, 0));
        geometryKanan.addVertice(new Vector3(0.533, 0.384, 0));
        // 8 DHL
        geometryKanan.addVertice(new Vector3(0.523, 0.339, 0));
        geometryKanan.addVertice(new Vector3(0.578, 0.363, 0));
        geometryKanan.addVertice(new Vector3(0.533, 0.384, 0));
        // 9 HLN
        geometryKanan.addVertice(new Vector3(0.578, 0.363, 0));
        geometryKanan.addVertice(new Vector3(0.533, 0.384, 0));
        geometryKanan.addVertice(new Vector3(0.591, 0.396, 0));
        // 10 LNM
        geometryKanan.addVertice(new Vector3(0.533, 0.384, 0));
        geometryKanan.addVertice(new Vector3(0.591, 0.396, 0));
        geometryKanan.addVertice(new Vector3(0.583, 0.436, 0));
    
        // 11 CIO
        geometryKanan.addVertice(new Vector3(0.368, 0.42, 0));
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        // 12 CRO
        geometryKanan.addVertice(new Vector3(0.368, 0.42, 0));
        geometryKanan.addVertice(new Vector3(0.402, 0.458, 0));
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        // 13 IOK
        geometryKanan.addVertice(new Vector3(0.398, 0.391, 0));
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        geometryKanan.addVertice(new Vector3(0.467, 0.375, 0));

        // 14 OKL
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        geometryKanan.addVertice(new Vector3(0.467, 0.375, 0));
        geometryKanan.addVertice(new Vector3(0.533, 0.384, 0));

        // 15 OLM
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        geometryKanan.addVertice(new Vector3(0.533, 0.384, 0));
        geometryKanan.addVertice(new Vector3(0.583, 0.436, 0));

        // 16 OPM
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        geometryKanan.addVertice(new Vector3(0.531, 0.469, 0));
        geometryKanan.addVertice(new Vector3(0.583, 0.436, 0));
        // 17 OPQ
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        geometryKanan.addVertice(new Vector3(0.531, 0.469, 0));
        geometryKanan.addVertice(new Vector3(0.469, 0.472, 0));
        // 18 OQR
        geometryKanan.addVertice(new Vector3(0.47, 0.432, 0));
        geometryKanan.addVertice(new Vector3(0.469, 0.472, 0));
        geometryKanan.addVertice(new Vector3(0.402, 0.458, 0));

        //BAWAHNYA BULAT
         // 1 FGS
        geometryKanan.addVertice(new Vector3(0.383, 0.358, 0));
        geometryKanan.addVertice(new Vector3(0.413, 0.34, 0));
        geometryKanan.addVertice(new Vector3(0.387, 0.289, 0));
        // 2 GST
        geometryKanan.addVertice(new Vector3(0.413, 0.34, 0));
        geometryKanan.addVertice(new Vector3(0.387, 0.289, 0));
        geometryKanan.addVertice(new Vector3(0.421, 0.256, 0));
        // 3 GJT
        geometryKanan.addVertice(new Vector3(0.413, 0.34, 0));
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        geometryKanan.addVertice(new Vector3(0.421, 0.256, 0));
        // 4 JTU
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        geometryKanan.addVertice(new Vector3(0.421, 0.256, 0));
        geometryKanan.addVertice(new Vector3(0.46, 0.241, 0));
        // 5 JUV
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        geometryKanan.addVertice(new Vector3(0.46, 0.241, 0));
        geometryKanan.addVertice(new Vector3(0.522, 0.247, 0));
        // 6 JDV
        geometryKanan.addVertice(new Vector3(0.463, 0.332, 0));
        geometryKanan.addVertice(new Vector3(0.523, 0.339, 0));
        geometryKanan.addVertice(new Vector3(0.522, 0.247, 0));
        // 7 DVW
        geometryKanan.addVertice(new Vector3(0.523, 0.339, 0));
        geometryKanan.addVertice(new Vector3(0.522, 0.247, 0));
        geometryKanan.addVertice(new Vector3(0.568, 0.273, 0));
        // 8 DHW
        geometryKanan.addVertice(new Vector3(0.523, 0.339, 0));
        geometryKanan.addVertice(new Vector3(0.578, 0.363, 0));
        geometryKanan.addVertice(new Vector3(0.568, 0.273, 0));

    }
    
    function verticesTengahKanan() {
        //BAGIAN TENGAH BADAN ATAS

        // 1 SZC1
        geometryKanan.addVertice(new Vector3(0.387, 0.289, 0));
        geometryKanan.addVertice(new Vector3(0.366, 0.303, 0));
        geometryKanan.addVertice(new Vector3(0.386, 0.322, 0));
        // 2 SZA1
        geometryKanan.addVertice(new Vector3(0.387, 0.289, 0));
        geometryKanan.addVertice(new Vector3(0.366, 0.303, 0));
        geometryKanan.addVertice(new Vector3(0.36, 0.284, 0));
        // 3 SA1B1
        geometryKanan.addVertice(new Vector3(0.387, 0.289, 0));
        geometryKanan.addVertice(new Vector3(0.36, 0.284, 0));
        geometryKanan.addVertice(new Vector3(0.38, 0.248, 0));
        // 4 STB1
        geometryKanan.addVertice(new Vector3(0.387, 0.289, 0));
        geometryKanan.addVertice(new Vector3(0.421, 0.256, 0));
        geometryKanan.addVertice(new Vector3(0.38, 0.248, 0));
        // 5 TB1D1
        geometryKanan.addVertice(new Vector3(0.421, 0.256, 0));
        geometryKanan.addVertice(new Vector3(0.38, 0.248, 0));
        geometryKanan.addVertice(new Vector3(0.422, 0.224, 0));
        // 6 TUD1
        geometryKanan.addVertice(new Vector3(0.421, 0.256, 0));
        geometryKanan.addVertice(new Vector3(0.46, 0.241, 0));
        geometryKanan.addVertice(new Vector3(0.422, 0.224, 0));
        // 7 UD1E1
        geometryKanan.addVertice(new Vector3(0.46, 0.241, 0));
        geometryKanan.addVertice(new Vector3(0.422, 0.224, 0));
        geometryKanan.addVertice(new Vector3(0.48, 0.216, 0));
        // 8 UE1F1
        geometryKanan.addVertice(new Vector3(0.46, 0.241, 0));
        geometryKanan.addVertice(new Vector3(0.48, 0.216, 0));
        geometryKanan.addVertice(new Vector3(0.539, 0.225, 0));
        // 9 UVF1
        geometryKanan.addVertice(new Vector3(0.46, 0.241, 0));
        geometryKanan.addVertice(new Vector3(0.522, 0.247, 0));
        geometryKanan.addVertice(new Vector3(0.539, 0.225, 0));
        // 10 VF1G1
        geometryKanan.addVertice(new Vector3(0.522, 0.247, 0));
        geometryKanan.addVertice(new Vector3(0.539, 0.225, 0));
        geometryKanan.addVertice(new Vector3(0.563, 0.236, 0));
        // 11 VWG1
        geometryKanan.addVertice(new Vector3(0.522, 0.247, 0));
        geometryKanan.addVertice(new Vector3(0.568, 0.273, 0));
        geometryKanan.addVertice(new Vector3(0.563, 0.236, 0));
   
        // 12 WG1H1
        geometryKanan.addVertice(new Vector3(0.568, 0.273, 0));
        geometryKanan.addVertice(new Vector3(0.563, 0.236, 0));
        geometryKanan.addVertice(new Vector3(0.601, 0.263, 0));

        // 13 WH1J1
        geometryKanan.addVertice(new Vector3(0.568, 0.273, 0));
        geometryKanan.addVertice(new Vector3(0.601, 0.263, 0));
        geometryKanan.addVertice(new Vector3(0.597, 0.308, 0));

        // 14 WI1J1
        geometryKanan.addVertice(new Vector3(0.568, 0.273, 0));
        geometryKanan.addVertice(new Vector3(0.574, 0.328, 0));
        geometryKanan.addVertice(new Vector3(0.597, 0.308, 0));

        //TENGAH KUNING KIRI ATAS
        // 1 A1B1K1
        geometryKanan.addVertice(new Vector3(0.36, 0.284, 0));
        geometryKanan.addVertice(new Vector3(0.38, 0.248, 0));
        geometryKanan.addVertice(new Vector3(0.372, 0.105, 0));
       // 2 B1K1D1
        geometryKanan.addVertice(new Vector3(0.38, 0.248, 0));
        geometryKanan.addVertice(new Vector3(0.372, 0.105, 0));
        geometryKanan.addVertice(new Vector3(0.422, 0.224, 0));
        // 3 K1D1L1
        geometryKanan.addVertice(new Vector3(0.372, 0.105, 0));
        geometryKanan.addVertice(new Vector3(0.422, 0.224, 0));
        geometryKanan.addVertice(new Vector3(0.42, 0.072, 0));
        //TENGAH HITAM TENGAH ATAS
        // 4 D1L1E1
        geometryKanan.addVertice(new Vector3(0.422, 0.224, 0));
        geometryKanan.addVertice(new Vector3(0.42, 0.072, 0));
        geometryKanan.addVertice(new Vector3(0.48, 0.216, 0));
        // 5 L1E1N1
        geometryKanan.addVertice(new Vector3(0.42, 0.072, 0));
        geometryKanan.addVertice(new Vector3(0.48, 0.216, 0));
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        // 6 E1N1F1
        geometryKanan.addVertice(new Vector3(0.48, 0.216, 0));
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        geometryKanan.addVertice(new Vector3(0.539, 0.225, 0));
        //TENGAH KUNING KANAN ATAS
        // 7 F1G1N1
        geometryKanan.addVertice(new Vector3(0.539, 0.225, 0));
        geometryKanan.addVertice(new Vector3(0.563, 0.236, 0));
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        // 8 G1N1M1
        geometryKanan.addVertice(new Vector3(0.563, 0.236, 0));
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        geometryKanan.addVertice(new Vector3(0.601, 0.115, 0));
        // 9 G1H1M1
        geometryKanan.addVertice(new Vector3(0.563, 0.236, 0));
        geometryKanan.addVertice(new Vector3(0.601, 0.263, 0));
        geometryKanan.addVertice(new Vector3(0.601, 0.115, 0));



        //TENGAH ITAM DOANG

        // 1 K1L1O1
        geometryKanan.addVertice(new Vector3(0.372, 0.105, 0));
        geometryKanan.addVertice(new Vector3(0.42, 0.072, 0));
        geometryKanan.addVertice(new Vector3(0.373, 0.041, 0));
        // 2 L1O1R1
        geometryKanan.addVertice(new Vector3(0.42, 0.072, 0));
        geometryKanan.addVertice(new Vector3(0.373, 0.041, 0));
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        // 3 L1N1R1
        geometryKanan.addVertice(new Vector3(0.42, 0.072, 0));
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        // 4 N1R1S1
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        // 5 N1S1T1
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        geometryKanan.addVertice(new Vector3(0.603, 0.046, 0));
        // 6 N1M1T1
        geometryKanan.addVertice(new Vector3(0.553, 0.076, 0));
        geometryKanan.addVertice(new Vector3(0.601, 0.115, 0));
        geometryKanan.addVertice(new Vector3(0.603, 0.046, 0));


        //TENGAH KUNING KIRI BAWAH
        // 1 O1R1P1
        geometryKanan.addVertice(new Vector3(0.373, 0.041, 0));
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        geometryKanan.addVertice(new Vector3(0.375, -0.038, 0));
       // 2 R1P1Q1
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        geometryKanan.addVertice(new Vector3(0.375, -0.038, 0));
        geometryKanan.addVertice(new Vector3(0.413, -0.08, 0));

        //TENGAH HITAM TENGAH BAWAH
        // 3 R1Q1Z1
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        geometryKanan.addVertice(new Vector3(0.413, -0.08, 0));
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));

        // 4 R1Z1S1
        geometryKanan.addVertice(new Vector3(0.418, 0.005, 0));
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        // 5 Z1S1V1
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        geometryKanan.addVertice(new Vector3(0.556, -0.086, 0));
        //TENGAH KUNING KANAN BAWAH
        // 6 S1V1W1
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        geometryKanan.addVertice(new Vector3(0.556, -0.086, 0));
        geometryKanan.addVertice(new Vector3(0.6, -0.05, 0));
        // 7 S1U1W1
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        geometryKanan.addVertice(new Vector3(0.605, 0.013, 0));
        geometryKanan.addVertice(new Vector3(0.6, -0.05, 0));
        // 8 S1T1U1
        geometryKanan.addVertice(new Vector3(0.55, 0.0, 0));
        geometryKanan.addVertice(new Vector3(0.603, 0.046, 0));
        geometryKanan.addVertice(new Vector3(0.605, 0.013, 0));

    }

    function verticesBawahKanan() {
        //BULAT BAWAH

        // 1 A2C2P1
        geometryKanan.addVertice(new Vector3(0.374, 0.01, 0));
        geometryKanan.addVertice(new Vector3(0.348, -0.017, 0));
        geometryKanan.addVertice(new Vector3(0.375, -0.038, 0));
        // 2 C2P1B2
        geometryKanan.addVertice(new Vector3(0.348, -0.017, 0));
        geometryKanan.addVertice(new Vector3(0.375, -0.038, 0));
        geometryKanan.addVertice(new Vector3(0.325, -0.057, 0));
        // 3 P1B2D2
        geometryKanan.addVertice(new Vector3(0.375, -0.038, 0));
        geometryKanan.addVertice(new Vector3(0.325, -0.057, 0));
        geometryKanan.addVertice(new Vector3(0.314, -0.131, 0));
        // 4 P1Q1D2
        geometryKanan.addVertice(new Vector3(0.375, -0.038, 0));
        geometryKanan.addVertice(new Vector3(0.413, -0.08, 0));
        geometryKanan.addVertice(new Vector3(0.314, -0.131, 0));
        // 5 Q1D2E2
        geometryKanan.addVertice(new Vector3(0.413, -0.08, 0));
        geometryKanan.addVertice(new Vector3(0.314, -0.131, 0));
        geometryKanan.addVertice(new Vector3(0.34, -0.23, 0));
        // 6 Q1Z1E2
        geometryKanan.addVertice(new Vector3(0.413, -0.08, 0));
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));
        geometryKanan.addVertice(new Vector3(0.34, -0.23, 0));
        // 7 Z1E2F2
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));
        geometryKanan.addVertice(new Vector3(0.34, -0.23, 0));
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        // 8 Z1F2G2
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        // 9 Z1V1G2
        geometryKanan.addVertice(new Vector3(0.488, -0.099, 0));
        geometryKanan.addVertice(new Vector3(0.556, -0.086, 0));
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        // 10 V1G2H2
        geometryKanan.addVertice(new Vector3(0.556, -0.086, 0));
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        geometryKanan.addVertice(new Vector3(0.659, -0.206, 0));
        // 11 V1H2I2
        geometryKanan.addVertice(new Vector3(0.556, -0.086, 0));
        geometryKanan.addVertice(new Vector3(0.659, -0.206, 0));
        geometryKanan.addVertice(new Vector3(0.672, -0.124, 0));
        // 12 V1W1I2
        geometryKanan.addVertice(new Vector3(0.556, -0.086, 0));
        geometryKanan.addVertice(new Vector3(0.6, -0.05, 0));
        geometryKanan.addVertice(new Vector3(0.672, -0.124, 0));
        // 13 W1I2K2
        geometryKanan.addVertice(new Vector3(0.6, -0.05, 0));
        geometryKanan.addVertice(new Vector3(0.672, -0.124, 0));
        geometryKanan.addVertice(new Vector3(0.656, -0.043, 0));
        // 14 W1K2J2
        geometryKanan.addVertice(new Vector3(0.6, -0.05, 0));
        geometryKanan.addVertice(new Vector3(0.656, -0.043, 0));
        geometryKanan.addVertice(new Vector3(0.624, 0.001, 0));
        // 15 W1U1J2
        geometryKanan.addVertice(new Vector3(0.6, -0.05, 0));
        geometryKanan.addVertice(new Vector3(0.605, 0.013, 0));
        geometryKanan.addVertice(new Vector3(0.624, 0.001, 0));

        
        //ALAS DASAR
        //1 C2B2L2
        geometryKanan.addVertice(new Vector3(0.348, -0.017, 0));
        geometryKanan.addVertice(new Vector3(0.325, -0.057, 0));
        geometryKanan.addVertice(new Vector3(0.315, -0.04, 0));
        // 2 B2L2M2
        geometryKanan.addVertice(new Vector3(0.325, -0.057, 0));
        geometryKanan.addVertice(new Vector3(0.315, -0.04, 0));
        geometryKanan.addVertice(new Vector3(0.295, -0.096, 0));
        // 3 B2M2D2
        geometryKanan.addVertice(new Vector3(0.325, -0.057, 0));
        geometryKanan.addVertice(new Vector3(0.295, -0.096, 0));
        geometryKanan.addVertice(new Vector3(0.314, -0.131, 0));
        // 4 M2D2N2
        geometryKanan.addVertice(new Vector3(0.295, -0.096, 0));
        geometryKanan.addVertice(new Vector3(0.314, -0.131, 0));
        geometryKanan.addVertice(new Vector3(0.277, -0.195, 0));
        // 5 D2N2E2
        geometryKanan.addVertice(new Vector3(0.314, -0.131, 0));
        geometryKanan.addVertice(new Vector3(0.277, -0.195, 0));
        geometryKanan.addVertice(new Vector3(0.34, -0.23, 0));


        // 6 N2E2O2
        geometryKanan.addVertice(new Vector3(0.277, -0.195, 0));
        geometryKanan.addVertice(new Vector3(0.34, -0.23, 0));
        geometryKanan.addVertice(new Vector3(0.263, -0.292, 0));
        // 7 E2O2F2
        geometryKanan.addVertice(new Vector3(0.34, -0.23, 0));
        geometryKanan.addVertice(new Vector3(0.263, -0.292, 0));
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        // 8 O2F2P2
        geometryKanan.addVertice(new Vector3(0.263, -0.292, 0));
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        geometryKanan.addVertice(new Vector3(0.281, -0.341, 0));
        // 9 F2P2Q2
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        geometryKanan.addVertice(new Vector3(0.281, -0.341, 0));
        geometryKanan.addVertice(new Vector3(0.339, -0.37, 0));
        // 10 F2Q2R2
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        geometryKanan.addVertice(new Vector3(0.339, -0.37, 0));
        geometryKanan.addVertice(new Vector3(0.485, -0.363, 0));
        // 11 F2R2T2
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        geometryKanan.addVertice(new Vector3(0.485, -0.363, 0));
        geometryKanan.addVertice(new Vector3(0.65, -0.361, 0));
        // 12 F2G2T2
        geometryKanan.addVertice(new Vector3(0.425, -0.273, 0));
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        geometryKanan.addVertice(new Vector3(0.65, -0.361, 0));
        // 13 G2T2U2
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        geometryKanan.addVertice(new Vector3(0.65, -0.361, 0));
        geometryKanan.addVertice(new Vector3(0.688, -0.344, 0));

        // 14 G2V2U2
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        geometryKanan.addVertice(new Vector3(0.716, -0.299, 0));
        geometryKanan.addVertice(new Vector3(0.688, -0.344, 0));
        // 15 G2V2H2
        geometryKanan.addVertice(new Vector3(0.551, -0.282, 0));
        geometryKanan.addVertice(new Vector3(0.716, -0.299, 0));
        geometryKanan.addVertice(new Vector3(0.659, -0.206, 0));






        // 16 V2H2W2
        geometryKanan.addVertice(new Vector3(0.716, -0.299, 0));
        geometryKanan.addVertice(new Vector3(0.659, -0.206, 0));
        geometryKanan.addVertice(new Vector3(0.706, -0.198, 0));
        // 17 H2W2I2
        geometryKanan.addVertice(new Vector3(0.659, -0.206, 0));
        geometryKanan.addVertice(new Vector3(0.706, -0.198, 0));
        geometryKanan.addVertice(new Vector3(0.672, -0.124, 0));
        // 18 W2I2Z2
        geometryKanan.addVertice(new Vector3(0.706, -0.198, 0));
        geometryKanan.addVertice(new Vector3(0.672, -0.124, 0));
        geometryKanan.addVertice(new Vector3(0.692, -0.105, 0));


        // 19 I2Z2K2
        geometryKanan.addVertice(new Vector3(0.672, -0.124, 0));
        geometryKanan.addVertice(new Vector3(0.692, -0.105, 0));
        geometryKanan.addVertice(new Vector3(0.656, -0.043, 0));

        // 20 Z2K2A3
        geometryKanan.addVertice(new Vector3(0.692, -0.105, 0));
        geometryKanan.addVertice(new Vector3(0.656, -0.043, 0));
        geometryKanan.addVertice(new Vector3(0.677, -0.048, 0));

    }

    verticesAtasKanan();
    verticesTengahKanan();
    verticesBawahKanan();
}

function addColorKanan() {
    function colorAtasKanan() {
        //SISI ATAS

        // 1 CEI
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        // 2 EIF
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 3 IFG
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 4 IGJ
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 5 IJK
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));

        // 6
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 7
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        // 8
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        // 9
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 10
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));


        // 11
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        // 12
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        // 13
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        // 14
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));

        // 15
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 16
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 17
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 18
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.542));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));

        //BAWAH BAGIAN BULAT

        // 1
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 2
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.9));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 3
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        // 4
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 5
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.725));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // 6
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.71));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.71));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // 7
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.71));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.965));
        // 8
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.72));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
    }

    function colorTengahKanan() {
        // SISI KIRI

        // 1
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // 2
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 3
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 4
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 5
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 6
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 7
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.69));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 8
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.66));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 9
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.67));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.68));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 10
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.7));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 11
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.71));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 12
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 13
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 14
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));

        //TENGAH KUNING KIRI ATAS
        // 1 A1B1K1
        geometryKanan.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.669, 0.2, 0.9));
       // 2 B1K1D1
        geometryKanan.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));
        // 3 K1D1L1
        geometryKanan.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));

        //TENGAH HITAM TENGAH ATAS
        // 4 D1L1E1
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.88));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.88));
        // 5 L1E1N1
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.88));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        // 6 E1N1F1
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.88));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));

        //TENGAH KUNING KANAN ATAS
        // 7 F1G1N1
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        // 8 G1N1M1
        geometryKanan.addColor(new Color(1.0, 0.69, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.667, 0.2, 0.9));
        // 9 G1H1M1
        geometryKanan.addColor(new Color(1.0, 0.66, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.68, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.67, 0.2, 0.9));


        //TENGAH DOANG
        // 1
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 2
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 3 -> Atas 
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 4
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 5 -> Bawah
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 6
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));


        //TENGAH KUNING KIRI BAWAH
        // 1 
        geometryKanan.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.78, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.669, 0.2, 0.9));
       // 2 
        geometryKanan.addColor(new Color(1.0, 0.78, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.65, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.7, 0.2, 0.9));

        //TENGAH HITAM TENGAH BAWAH
        // 3 
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        // 4 
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        // 5 
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.86));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));

        //TENGAH KUNING KANAN BAWAH
        // 6 
        geometryKanan.addColor(new Color(1.0, 0.778, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.78, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.669, 0.2, 0.9));
        // 7 
        geometryKanan.addColor(new Color(1.0, 0.778, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.67, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.669, 0.2, 0.9));
        // 8 
        geometryKanan.addColor(new Color(1.0, 0.778, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.75, 0.2, 0.9));
        geometryKanan.addColor(new Color(1.0, 0.669, 0.2, 0.9));

    }

    function colorBawahKanan() {
        //SISI BULAT BAWAH

        // 1 -> Kanan
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 2
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // 3
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        // 4
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        // 5 -> Kiri
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        // 6
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.756));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        // 7
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.998));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        // 8
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        // 9 -> Tengah
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.79));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.935));
        // 10
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.935));
        // 11
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.816));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 12
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.81));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 13
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 14
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 15
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 1.0));

        //ALAS DASAR

        // 1 -> Kanan
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 2
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // 3
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 4
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.96));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // 5 -> Kiri
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.78));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.96));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.8));
        // 6
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.956));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.768));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.96));
        // 7
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.96));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        // 8
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        // 9 -> Tengah
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.935));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.935));
        // 10
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.73));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.93));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.935));
        // 11
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 12
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.74));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.77));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 13
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.75));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 14
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 15
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.76));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        // 16
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.94));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 17
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.92));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        // 18
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.87));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 19
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.89));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.95));
        // 20
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // // 21
        // geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
        // geometryKanan.addColor(new Color(0.0, 0.0, 0.0, 0.97));
    }

    colorAtasKanan();
    colorTengahKanan();
    colorBawahKanan();
}

function addFaceKanan() {
    for (let i = 0; i < (26+14+9+6+8+15+20) * 3; i += 3) {
        geometryKanan.addFace(new Face(i, i + 1, i + 2));
    }
}