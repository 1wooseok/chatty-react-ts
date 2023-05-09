import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpClient {
	private readonly instance: AxiosInstance;
	private readonly BASE_URL = 'https://chatty.kr/api/v1';
	private TIMEOUT = 5000;

	constructor() {
		this.instance = axios.create({
			baseURL: this.BASE_URL,
			timeout: this.TIMEOUT,
		});
	}

	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const res = await this.instance.get<T>(url, config);
		return res.data;
	}

	public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
		const res = await this.instance.post<T>(url, data, config);
		return res.data;
	}
}

const ChattyClient = new HttpClient();
export default ChattyClient;
