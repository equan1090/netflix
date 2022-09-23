class APIQueue {
    constructor() {
        this.queue = [];
        this.MAX_CALLS = 4;
        this.TIME_WINDOW = 500;
        this.processing = false;
    }

    pushRequest = (promise) => {
        return new Promise((resolve, reject) => {
            // Add the promise to the queue.
            this.queue.push({
                promise,
                resolve,
                reject,
            });

            // If the queue is not being processed, we process it.
            if (!this.processing) {
                this.processing = true;
                setTimeout(() => {
                    this.processQueue();
                }, this.TIME_WINDOW / this.MAX_CALLS);
            }
        }
        );

    };

    processQueue = () => {
        const item = this.queue.shift();
        try {
            const data = item.promise();
            item.resolve(data);
            if (this.queue.length > 0) {
                this.processing = true;
                setTimeout(() => {
                    this.processQueue();
                }, this.TIME_WINDOW / this.MAX_CALLS)
            }else {
                this.processing = false;
            }
        } catch(e) {
            item.reject(e)
        }
    }

}

const instance = new APIQueue();
Object.freeze(APIQueue)
export default instance;
