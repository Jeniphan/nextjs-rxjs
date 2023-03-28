import { from, Observable } from "rxjs";

export class HttpService {
  public get<T>(url: string, headers: any = {}): Observable<T> {
    return from(
      fetch(url, { headers }).then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
    );
  }

  public post<T>(url: string, body: any, headers: any = {}): Observable<T> {
    return from(
      fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
    );
  }

  public put<T>(url: string, body: any, headers: any = {}): Observable<T> {
    return from(
      fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
    );
  }

  public delete<T>(url: string, headers: any = {}): Observable<T> {
    return from(
      fetch(url, {
        method: "DELETE",
        headers,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
    );
  }

  public patch<T>(url: string, body: any, headers: any = {}): Observable<T> {
    return from(
      fetch(url, {
        method: "PATCH",
        headers,
        body: JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
    );
  }
}
