varying vec3 normal;

void main()
{
	vec3 lightDir = normalize(vec3(-50.0, 5.0, -15.0));
	const vec3 ambient = vec3(0.1, 0.1, 0.1);

	float NdotL = max(dot(normalize(normal), lightDir), 0.0);
	vec3 color = ambient + gl_Color.rgb * NdotL;

	gl_FragColor = vec4(color, gl_Color.a);
}